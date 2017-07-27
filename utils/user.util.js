const { mongoUtil } = require('../endpoint');
const { userCollection } = require('../const').collections;




let signUp = (userData) => {

    return new Promise((resolve, reject) => {
        //collection name depends on the firm name
        let collection = userData.firmName + "_" + userCollection;
        mongoUtil.insert(collection, userData)
            .then(result => {
                return resolve({ message: "SignUp done" })
            })
            .catch(err => {
                return reject({ message: "SignUp failed" })
            })
    })

}


let userNameAvailability = (userName, firmName) => {
    return new Promise((resolve, reject) => {
        let collection = firmName + "_" + userCollection;
        mongoUtil.getByQuery(collection, { userName: userName })
            .then(result => {
                if (result.length == 0)
                    return resolve({ message: "UserName Available" });

                return reject({ message: "UserName Taken, Please try other Username" });
            })
            .catch(err => {
                if (err.message === "DB get Failed")
                    return reject({ message: "DB Error: Failed to fetch transaction data from DB" })

                return reject(err);
            })
    })
};


module.exports = {

    signUp,
    userNameAvailability


}