
const db = require("../db/dbConfig.js");

const getAllGroceries = async () => {
    try {
        const allGroceries = await db.any("SELECT * FROM groceries");
        return allGroceries;
    } catch (error) {
        return error;
    }
};

//one item
const getGroceryItem = async (id) => {
    try {
        const oneItem =await db.one("SELECT * FROM groceries WHERE id=$1", id);
        return oneItem;
    }catch (error) {
        return error;
    }
};


const createGroceryItem= async (groceryItem) => {
    if(!groceryItem.dateAdded) {
        groceryItem.dateAdded = "now()"
    }
    try {
        const newGroceryItem = await db.one( "INSERT INTO groceries (name, is_organic, quantity, category, price, dateAdded, expiration) VALUES( $1, $2, $3, $4, $5, $6, $7) RETURNING *", [groceryItem.name, groceryItem.is_organic, groceryItem.quantity, groceryItem.category, groceryItem.price, groceryItem.dateAdded, groceryItem.expiration]);
        return newGroceryItem;
    } catch (error) {
      throw error;
    }
  };

  const deleteGroceryItem  = async (id) => {
    try {
        const deletedGroceryItem = await db.one(
            "DELETE FROM groceries WHERE id = $1 RETURNING *", id
        );
        return deletedGroceryItem;
    }catch (error) {
        return error;
    }
  };

  const updateGroceryItem = async (id, groceryItem) => {
    try {
        const updatedGroceryItem = await db.one("UPDATE groceries SET  name=$1, is_organic=$2, quantity=$3, category=$4, price=$5, dateAdded=$6, expiration=$7 WHERE id=$8 RETURNING *",[groceryItem.name, groceryItem.is_organic, groceryItem.quantity, groceryItem.category, groceryItem.price, groceryItem.dateAdded, groceryItem.expiration, id]
        );
        return updatedGroceryItem;
    } catch (error) {
        return error;
    }
  };


module.exports = { getAllGroceries, getGroceryItem, createGroceryItem , deleteGroceryItem, updateGroceryItem};