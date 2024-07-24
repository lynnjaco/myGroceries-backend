
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


module.exports = { getAllGroceries, getGroceryItem };