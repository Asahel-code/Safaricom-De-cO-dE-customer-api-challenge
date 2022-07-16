const express = require('express');
const router = express.Router();
const customerController = require('../../controllers/customerController');
const getCustomer = require('../../middlleware/getCustomer')

//customers api to get all customers
router.get("/", customerController.getAllCustomers);

//customers api to get a single customer
router.get("/:customerId", getCustomer, customerController.getOneCustomer);

//Customers api to add a new customer
router.post("/",customerController.createNewCustomer);

//Customers api to update a customer
router.patch("/:customerId", getCustomer, customerController.updateOneCustomer);

//Customers api to remove a customer
router.delete("/:customerId", getCustomer, customerController.deleteOneCustomer);

module.exports = router;