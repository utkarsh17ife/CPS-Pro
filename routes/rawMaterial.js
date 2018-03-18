const express = require('express');
const rawMaterialRouter = express.Router();
const validate = require('express-validation')

const { rawMaterialController } = require('../controllers');
const { rawMaterialVaidator } = require('../validators');


rawMaterialRouter.get('/', async (req, res) => {

    let result = await rawMaterialController.getAll();
    res.status(result.status).send(result);

})

rawMaterialRouter.post('/', validate(rawMaterialVaidator.saveRawMaterial), async (req, res) => {

    let result = await rawMaterialController.saveRawMaterial(req.body);
    res.status(result.status).send(result);

})


module.exports = rawMaterialRouter;