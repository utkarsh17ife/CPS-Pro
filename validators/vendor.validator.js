const Joi = require('joi');

let saveVendor = {
    body: {
        name: Joi.string().required(),
        address: Joi.string().required(),
        location: Joi.object(),
        tin: Joi.string().required(),
        rawMaterialsList: Joi.array().required(),
    }
}

module.exports = {
    saveVendor
}

