const { Router } = require("express");
 const userRoutes = require("../Controllers/users");
const authRoutes = require("../Controllers/auth");
const datasets =require("../Controllers/datasets")
const router = Router();


router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/datasets",datasets)
module.exports = router;