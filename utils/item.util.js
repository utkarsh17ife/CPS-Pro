const { mongoUtil } = require('../endpoint');
const { itemCollection } = require('../const').collections;




let saveItem = (itemData) => {

    return new Promise((resolve, reject) => {

        let collection = itemData.firmName + "_" + itemCollection;

        //fetch all the items with that category
        let newId;
        mongoUtil.getLastOneRecordByQuery(collection, { itemCategory: itemData.itemCategory })
            .then(result => {
                if (result.length) {
                    let lastItem = result[0];
                    let lastId = lastItem.itemId.substr(lastItem.itemId.length - 5);
                    lastId = "1" + lastId;
                    let tempId = String(Number(lastId) + 1);
                    lastId = tempId.substr(tempId.length - 5);
                    itemData.itemId = itemData.itemCategory + lastId;
                    newId = itemData.itemId;
                } else {
                    itemData.itemId = itemData.itemCategory + "00001";
                    newId = itemData.itemId;
                }
                return mongoUtil.insert(collection, itemData)
            })
            .then(result => {
                return resolve({ message: "Item saved" , itemId: newId});
            })
            .catch(err => {
                return reject(JSON.stringify(err));
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
                return reject({ message: "Failed to fetch items from DB" });
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
                return reject({ message: "Failed to update the data in DB" });
            });

    })

}



module.exports = {
    saveItem,
    getAllItems,
    updateItem
}