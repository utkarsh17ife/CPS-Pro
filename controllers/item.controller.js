const { ItemModel } = require('../models');
const db = require('../endpoint/db.util');
const { collections } = require('../const');
const _ = require('lodash');

let saveItem = async (itemData) => {

    let item;
    try {
        item = new ItemModel(itemData);
        await item.save();

        return {
            status: 200,
            success: true,
            message: 'New Item created'
        }

    } catch (err) {

        return {
            status: 500,
            success: true,
            message: err.message || 'Internal server error'
        }

    }

}

let getAll = async function () {

    let items;
    let rawMaterials = [];
    try {
        items = await db.getAll(collections.itemCollection);
        items.forEach(item => {
            if (item.variables.length)
                rawMaterials = rawMaterials.concat(item.variables);
        });

        rawMaterials = Array.from(new Set(rawMaterials));
        rawMaterialsData = await db.getByQuery(collections.rawMaterialCollection, { rawMaterialId: { $in: rawMaterials } });

        items.forEach(item => {
            item.variableData = _.filter(rawMaterialsData, function (p) {
                return _.includes(item.variables, p.rawMaterialId);
            });

        })


        return {
            status: 200,
            success: true,
            message: 'Items retrived',
            data: items
        }
    } catch (err) {

        return {
            status: 500,
            success: true,
            message: err.message || 'Internal server error'
        }
    }

}


module.exports = {
    saveItem,
    getAll
}


