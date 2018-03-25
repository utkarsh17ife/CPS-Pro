const Joi = require('joi');

let saveVendRawMatMap = {
    body: {
        vendorMaterialId: Joi.string().required(),
        materialPropNameStr: Joi.string().required(),
        priceMap: Joi.object()
    }
}

module.exports = {
    saveVendRawMatMap
}
