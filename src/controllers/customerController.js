const Customer = require('../models/Customer');
const { validateCustomer } = require('../utils/validation')


const getAllCustomers = async (req, res) => {
    try {
        //Fetching all the customer available in our database
        const customers = await Customer.find();

        //Return a 200 reponse status with a list of all customers
        return res.status(200).json(customers)
    }
    catch (error) {
        //Capturing server error encountered 
        return res.status(error?.status || 500).json({ 'message': error?.message || error });
    }
}

const getOneCustomer = async (req, res) => {

    //Returning a single user after a success and valid id of user submission
    res.status(200).json(res.customer);
}

const createNewCustomer = async (req, res) => {

    const { body } = req;
    const { error } = validateCustomer(body);
    //if valid, return 400 - Bad request
    if (error) return res.status(400).json({ 'message': error.details[0].message });

    //Adding a new user
    const newCustomer = new Customer({
        name: body.name,
        surname: body.surname,
        age: body.age,
        height: body.height,
        addresses: body.addresses,
        idNumber: body.idNumber,
        passportNumber: body.passportNumber,
        nationality: body.nationality,
        expiryDate: body.expiryDate,
    });

    try {
        //Saving a new customer to database
        await newCustomer.save();

        //Return a successful created status 201 and a message
        return res.status(201).json({ 'message': 'Customer has been created successfully' });
    }
    catch (error) {
         //Capturing server error encountered 
        return res.status(error?.status || 500).json({ 'message': error?.message || error });
    }
};

const updateOneCustomer = async (req, res) => {
    const { body } = req;

    const { error } = validateCustomer(body);
    //if valid, return 400 - Bad request
   if (error) return res.status(400).json({ 'message': error.details[0].message });

    //Upadating customers values
    res.customer.name = body.name;
    res.customer.surname = body.surname;
    res.customer.age = body.age;
    res.customer.height = body.height;
    res.customer.addresses = body.addresses;
    res.customer.idNumber = body.idNumber;
    res.customer.passportNumber = body.passportNumber;
    res.customer.nationality = body.nationality;
    res.customer.expiryDate = body.expiryDate;

    try {
        //Saving updated customers values
        const updatedCustomer = await res.customer.save();

        //Return a 200 success response status after update with the customer details
        return res.status(200).json(updatedCustomer);
    }
    catch (error) {
         //Capturing server error encountered 
        return res.status(error?.status || 500).json({ 'message': error?.message || error });
    }

};

const deleteOneCustomer = async (req, res) => {
    try {
        //Removing a customer 
        await res.customer.remove();

        //Return a successful response status 204 after deleting
        return res.status(204).json({ 'message': "Customer has been removed successfully" });
    }
    catch (error) {
         //Capturing server error encountered 
        return res.status(error?.status || 500).json({ 'message': error?.message || error });
    }

};


module.exports = {
    getAllCustomers,
    getOneCustomer,
    createNewCustomer,
    updateOneCustomer,
    deleteOneCustomer,
}