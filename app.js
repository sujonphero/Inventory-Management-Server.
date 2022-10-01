const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");

// MIDDLEWEAR...
app.use(express.json());
app.use(cors());

// ROUTE..
app.get("/", (req, res) => {
    res.send("Hello Developer. WT are you doing")
})

module.export = app;