const router = require("express").Router();
const axios = require('axios');

router.get('/all', async(req,res)=>{
 
     
    try {
        const response = await axios.get(`https://huggingface.co/api/datasets/`);
        const dataset = response.data;
        console.log(dataset);
        res.send(dataset)
    } catch (error) {
        console.error('Error fetching dataset:', error);
    }

})

router.post('/', async (req, res) => {
    const { id } = req.body; // Access the 'id' parameter from req.params

    try {
        const response = await axios.get(`https://huggingface.co/api/datasets/${id}`);
        const dataset = response.data;
        res.send(dataset);
    } catch (error) {
        console.error('Error fetching dataset:', error);
        res.status(500).send('Error fetching dataset');
    }
});

module.exports = router;
