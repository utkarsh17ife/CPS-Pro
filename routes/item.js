const express = require('express');
const router = express.Router();
const { securityUtil, itemUtil } = require('../utils');



router.post('/save', (req, res)=>{

    let itemData = req.body;
    console.log(itemData);

    itemUtil.saveItem(itemData)
    .then(result=>{
        res.status(200).send({message: "Item Saved"});
    })
    .catch(err=>{
        res.status(400).send({message: "Item not saved"});
    })

})


router.post('/getAll', (req, res)=>{

    let firmName = req.body.firmName;
    console.log(firmName);

    itemUtil.getAllItems(firmName)
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(400).send({message: "Failed to fetch Items of " + firmName});
    })

})





module.exports = router;
