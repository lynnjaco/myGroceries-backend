//DEPENDENCIES
const cors = require("cors");
const express = require("express");

//CONFIGURATION
const app = express();
const groceriesController = require("./controllers/groceriesController.js");

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/groceries", groceriesController);

//ROUTES
app.get("/", (req, res) => {
    res.send("Wanna buy groceries");
});

//404 page
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;