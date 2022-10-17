const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "please provide a brand name"],
        maxLength: 100,
        unique: true
    },
    description: String,
    email: {
        type: String,
        validate: [validator.isEmail, "please provide a valid email"]
    },
    website: {
        type: String,
        validate: [validator.isUrl, "Please provide a valid url"]
    },
    location: String,
    products: [{
        type: ObjectId,
        ref: "Product"
    }],
    suppliers: [{
        name: String,
        contactNumber: String,
        id: ObjectId,
    }]
});