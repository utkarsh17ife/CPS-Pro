const Joi = require('joi');


let propSchmea = Joi.object({
    propName: Joi.string().min(1).required(),
    propValues: Joi.array().min(1).unique().required()
}).required();


let saveRawMaterial = {
    body: {
        name: Joi.string().required(),
        type: Joi.string().required(),
        unit: Joi.string().required(),
        unitType: Joi.string().required().valid(['length', 'weight', 'volume', 'pieces']),
        properties: Joi.array().items(propSchmea).min(1).unique().required()
    }
}


module.exports = {
    saveRawMaterial
}
