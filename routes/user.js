const express = require('express');
const router = express.Router();
const { securityUtil, userUtil } = require('../utils');



//User SignUp
/*{
	"userName": "ut",
	"userPassword": "1234",
	"phone" : 9887766123,
	"email": "ut@ut.com",
	"firmName": "ut"
}*/

router.post('/signup', (req, res) => {

    let userData = req.body;

    if(!securityUtil.validateSignUp(userData)){
        return res.status(400).send({message: "Incomplete/invalid Input for processing the request"});
    }

    userUtil.userNameAvailability(userData.userName, userData.firmName)
    .then(result=>{
        
        userData.userPassword = securityUtil.encryptPassword(userData.userPassword);
        console.log(userData);
        return userUtil.signUp(userData)
    })    
    .then(result=>{
      
        return res.status(200).send(result);
    })
    .catch(err=>{
        console.log(JSON.stringify(err));
        err.status = "SignUp Failed";
        return res.status(400).send(err);
    });
});



//Login







//Get User Info


module.exports = router;