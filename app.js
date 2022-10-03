const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");

// MIDDLEWEAR...
app.use(express.json());
app.use(cors());

// SCHEMA DESIGN...
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide name for this product."],
        trim: true,
        unique: [true, "Name must be unique."],
        minLength: [3, "Name must be at least 3 charecters."],
        maxLength: [100, "Name is too large."]
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
        min: [0, "Price can,t be negative."]
    },
    unit: {
        type: String,
        required: true,
        enum:{
            values:["kg", "litre", "pcs"],
            message: "Unit value can,t be {VALUE}, must be kg/litre/pcs"
        }
    },
    quantity: {
        type:Number,
        required: true,
        min: [0, "Quantity can,t be negetive."],
        validate:{
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if(isInteger) {
                    return true
                } else {
                    return false
                }
            }
        }
    },
    message: "Quantity must be an Integer.",
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "supplier"
    },
    categories: [{
        name: {
            type: String,
            required: true,
        },
        _id: mongoose.Schema.Types.ObjectId
    }],
    status: {
        type: String,
        required: true,
        enum: {
            values: ["in-stcok", "out-of-stock", "discontinued"],
            message: "Status can,t be {VALUE}"
        }
    },
    
    // FROM
    createAt: {
        type: Date,
        default: Date.now,
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
    // OPTIONAL

}, {
    timestamps: true
})

// ---------------------------- //

// schema => model => query.

// ROUTE..
app.get("/", (req, res) => {
    res.send("Hello Developer. WT are you doing")
})

module.exports = app;