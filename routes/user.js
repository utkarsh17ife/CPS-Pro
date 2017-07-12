const express = require('express');
const router = express.Router();
const { userUtil } = require('../utils');


//Sign Up
router.post('/signup', (req, res)=>{

    res.status(200).send({msg: "signed up"});


});

router.get('/all', (req, res)=>{
    
    
    userUtil.getAllUsers()
    .then(result=>{

        return res.status(200).send(result);

    })
    .catch(err=>{

        return res.status(400).send({err});

    })



})








//Login







//Get User Info


module.exports = router;