const Customer = require("../models/Customer");


const getCustomer = async (req, res, next) => {
    const {
        params: { customerId },
    } = req;

    let customer

    //Checking of customer id has been to the parameters
    if (!customerId) return res.status(400).json({' message': "Parameter ':customerId' can not be empty" });

    try {
        //Finding the specified customer in the db
        customer = await Customer.findById(customerId);

        //Not found response status code with a message
        if (customer === null) return res.status(404).json({' message': "This customer is not available in our records" })
    }
    catch (error) {
         //Capturing server error encountered 
        return res.status(error?.status || 500).json({' message': error?.message || error });
    }

    //providing a link to access the middleware to other parts of the code that is required
    res.customer = customer;
    next()
}

module.exports = getCustomer;