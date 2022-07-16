require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const corsOptions = require('./config/corsOptions');
const connectDB = require('../src/config/dbConfig');
const v1CustomerRoutes = require("./v1/routes/customerRoutes");

// Connect to MongoDB
connectDB();

// built-in middleware for json 
app.use(express.json());

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

//v1 customers access api 
app.use('/api/v1/customers', v1CustomerRoutes);

const PORT = process.env.PORT || 8000;

//Testing mongodb connection before running the api
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on ${PORT} ...`));
});