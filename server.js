// configuration
const app = require("./app");

//configuration
require("dotenv").config();
const PORT = process.env.PORT;

//view

app.listen(PORT, () => {
    console.log(`I see you on PORT ${PORT}`);
});