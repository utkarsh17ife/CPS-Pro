var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');










//crate JWT tokens here
function createToken (details){

    return jwt.sign(details[0], JWTsecret, {expiresIn: "2 days"});

}


//Verify JWT middleware
function verifyJWT(req, res, next){

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {

    jwt.verify(token, JWTsecret, function(err, decoded) {      
        if (err) {
            return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
        // if everything is good, save to request for use in other routes
            req.decoded = decoded;    
            next();
        }
    });

    } else {

    // if there is no token
    // return an error
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });

    }
}




let encryptPassword = function(password) {
    
    let salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);

};

let comparePassword = function(password, userPassword) {
    
    return bcrypt.compareSync(password, userPassword);
};


/*Functions to be exported*/
exports = module.exports ={
    
    
}