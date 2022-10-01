const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// DATABASE CONNECTION...
mongoose.connect(process.env.DATABASE_LOCAL)
.then(() => {
    console.log("Hello Developer How are you..!!!" .red.bold.invers);
})

// SERVER
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Now i am running on 5000" .red.inverse)
})