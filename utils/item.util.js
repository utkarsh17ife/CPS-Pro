const { mongoUtil } = require('../endpoint');
const { itemCollection } = require('../const').collections;




let saveItem = (itemData) => {

    return new Promise((resolve, reject) => {

        let collection = itemData.firmName + "_" + itemCollection;
        mongoUtil.insert(collection, itemData)
            .then(result => {
                return resolve({ message: "Item saved" });
            })
            .catch(err => {
                return reject({ message: "Failed to save Item" });
            })

    })

}


let getAllItems = (firmName) => {

    return new Promise((resolve, reject) => {
        let collection = firmName + "_" + itemCollection;
        mongoUtil.getAll(collection)
            .then(result => {
                return resolve(result);
            })
            .catch(err => {
                return reject({message: "Failed to fetch items from DB"});
            })
    })

}


let updateItem = (itemData) => {

    return new Promise((resolve, reject) => {
        let collection = itemData.firmName + "_" + itemCollection;
        mongoUtil.upsert(collection, { itemCode: itemData.itemCode }, itemData)
            .then(result => {
                return resolve(result);
            })
            .catch(err => {
                return reject({message: "Failed to update the data in DB"});
            });

    })

}



module.exports = {
    saveItem,
    getAllItems,
    updateItem
}