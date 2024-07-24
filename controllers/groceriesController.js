const express = require("express");
const groceries = express.Router();
const { getAllGroceries, getGroceryItem } = require("../queries/groceries");



// INDEX
groceries.get("/", async (req, res) => {
    const allGroceries = await getAllGroceries();
    if (allGroceries[0]) {
        res.status(200).json(allGroceries)
    }else {
        res.status(500).json({error: "server error"});
    }
});

//SHOW
groceries.get("/:id", async (req, res) =>  {
    const { id } = req.params;
    const groceryItem = await getGroceryItem(id);
    if (groceryItem) {
         res.json(groceryItem);
    }else {
        res.status(404).json({error: "not found"});
    }
});

module.exports = groceries;

