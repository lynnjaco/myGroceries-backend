//DEPENDENCIES

const cors = require("cors");
const express = require("express");

//CONFIGURATION
const app = express();
const groceryController =require("./controllers/groceryController.js");

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/grocery",groceryController);

//ROUTES
app.get("/", (req, res) => {
    res.send("Wanna buy groceries");
});


//404 page

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;