const express = require("express");
const groceries = express.Router();
const { getAllGroceries, getGroceryItem,createGroceryItem,deleteGroceryItem, updateGroceryItem } = require("../queries/groceries");

//const { checkGroceries } =require("../validations/checkGroceries.js");



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

// CREATE
groceries.post("/", async (req, res) => {
    const groceryItem = await createGroceryItem(req.body);
    res.json(groceryItem);
  });

//DELETE

groceries.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedGroceryItem = await deleteGroceryItem(id);
    if (deletedGroceryItem.id) {
        res.status(200).json( deletedGroceryItem );
    }else {
        res.status(404).json("GroceryItem not found");
    } 
});

//UPDATE

groceries.put("/:id", async (req, res)=>{
    const { id } = req.params;
    const updatedGroceryItem = await updateGroceryItem(id, req.body);
    res.status(200).json( updatedGroceryItem );
});

module.exports = groceries;

