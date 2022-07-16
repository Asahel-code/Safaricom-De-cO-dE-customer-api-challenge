const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    addresses: [
        {
            sequeunceNo: Number,
            line1: Number,
            line2: Number,
            line3: Number,
            line4: Number,
            code: Number,
            type: {
                type: String,
                default: "RESIDENTIAL"
            },
        }
    ],
    idNumber: Number,
	passportNumber: Number,
	nationality: String,
    active: {
        type: Boolean,
        default: true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    lastUpdated: {
        type: Date,
        default: Date.now()
    },
    expiryDate: {
        type: Date
    }
});

module.exports = mongoose.model('customers', customerSchema); 