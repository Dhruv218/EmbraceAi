require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./Database/db");
const userRoutes = require("./Controllers/users");
const authRoutes = require("./Controllers/auth");
const router=require('./routes/all_routes')
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api",router)

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
