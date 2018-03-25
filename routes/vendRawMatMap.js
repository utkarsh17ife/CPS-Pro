const express = require('express');
const vendRawMatMapRouter = express.Router();
const validate = require('express-validation')

const { vendRawMatMapController } = require('../controllers');
const { vendRawMatMapValidator } = require('../validators');


vendRawMatMapRouter.get('/', async (req, res) => {

    let result = await vendRawMatMapController.getAll();
    res.status(result.status).send(result);

})

vendRawMatMapRouter.post('/', validate(vendRawMatMapValidator.saveVendRawMatMap), async (req, res) => {

    let result = await vendRawMatMapController.saveMaterialMap(req.body);
    res.status(result.status).send(result);

})


module.exports = vendRawMatMapRouter;




