const Joi = require('joi');


//cancel booking
let saveItem = {
    body: {
        name: Joi.string().required(),
        category: Joi.string().required(),
        description: Joi.string().required(),
        shortDescription: Joi.string().required(),
        variables: Joi.array()
    }
}


module.exports = {
    saveItem
}