require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // Connecting to db
        await mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
    }
    catch (error) {
        //Capturing error encountered while connecting to db
        return res.status(error?.status || 500).json({ 'message': error?.message || error });
    }
}

module.exports = connectDB