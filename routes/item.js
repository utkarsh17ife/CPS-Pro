const express = require('express');
const itemRouter = express.Router();
const validate = require('express-validation')

const { itemController } = require('../controllers');
const { itemVaidator } = require('../validators');


itemRouter.get('/', async (req, res) => {

    let result = await itemController.getAll();
    res.status(result.status).send(result);

})

itemRouter.post('/', validate(itemVaidator.saveItem), async (req, res) => {

    let result = await itemController.saveItem(req.body);
    res.status(result.status).send(result);

})



module.exports = itemRouter;




