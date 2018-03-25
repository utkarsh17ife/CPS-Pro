const express = require('express');
const vendorRouter = express.Router();
const validate = require('express-validation')

const { vendorController } = require('../controllers');
const { vendorValidator } = require('../validators');


vendorRouter.get('/', async (req, res) => {

    let result = await vendorController.getAll();
    res.status(result.status).send(result);

})

vendorRouter.post('/', validate(vendorValidator.saveVendor), async (req, res) => {

    let result = await vendorController.saveVendor(req.body);
    res.status(result.status).send(result);

})



module.exports = vendorRouter;




