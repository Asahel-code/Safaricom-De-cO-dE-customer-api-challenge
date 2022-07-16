const Joi = require('joi');

//Validating require customers details
const validateCustomer = (customer) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        surname: Joi.string().required(),
        age: Joi.number().integer().required(),
        height: Joi.number().required(),
        addresses: Joi.array(),
        idNumber: Joi.number(),
        passportNumber: Joi.number(),
        nationality: Joi.string(),
        active: Joi.boolean(),
        expiryDate: Joi.date()
    });

    return schema.validate(customer);
}

module.exports = { validateCustomer };