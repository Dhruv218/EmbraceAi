const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		const newuser=await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully", status: true ,data: user});
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.post('/:userId/datasets', async (req, res) => {
    const { userId } = req.params;
    const { datasetId } = req.body;

    try {
        // Check if datasetId is provided
        if (!datasetId|| datasetId==null) {
            return res.status(400).json({ message: 'Dataset ID is required' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if datasetId is already in the Datasets field
        if (user.Datasets.includes(datasetId)) {
            return res.status(400).json({ message: 'Dataset ID already exists in the user datasets' });
        }

        // Insert the datasetId into the Datasets field
        user.Datasets.push(datasetId);
        await user.save();

        res.status(201).json({ message: 'Dataset ID inserted successfully', user });
    } catch (error) {
        console.error('Error inserting dataset ID:', error);
        res.status(500).json({ message: 'Error inserting dataset ID' });
    }
});

router.delete('/:userId/datasets/:datasetId', async (req, res) => {
    const { userId, datasetId } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if datasetId exists in the Datasets field
        if (!user.Datasets.includes(datasetId)) {
            return res.status(404).json({ message: 'Dataset ID not found in the user datasets' });
        }

        // Remove the datasetId from the Datasets field
        user.Datasets = user.Datasets.filter(id => id !== datasetId);
        await user.save();

        res.json({ message: 'Dataset ID removed successfully', user });
    } catch (error) {
        console.error('Error removing dataset ID:', error);
        res.status(500).json({ message: 'Error removing dataset ID' });
    }
});

router.get('/userdetail/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find user by ID in the database
      const user = await User.findById(id);
  
      // If user is not found, return 404
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const { password, ...userDataWithoutPassword } = user.toObject();
      // If user is found, return user details
      res.json(userDataWithoutPassword);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


module.exports = router;
