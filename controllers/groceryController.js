
const express = require("express");
const grocery = express.Router();


//index
grocery.get("/", (req, res)=> {
    res.json({ status:"ok"});
});


module.exports = grocery;