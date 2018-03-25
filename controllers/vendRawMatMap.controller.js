const { VendRawMatMapModel } = require('../models');
const db = require('../endpoint/db.util');
const { collections } = require('../const');
const _ = require('lodash');

let saveMaterialMap = async (vendorMaterialMapData) => {

    let materialMap;
    try {
        materialMap = new VendRawMatMapModel(vendorMaterialMapData);

        await materialMap.save();

        return {
            status: 200,
            success: true,
            message: 'New material price mapping created'
        }

    } catch (err) {

        return {
            status: 500,
            success: false,
            message: err.message || 'Internal server error'
        }

    }

}

let getAll = async function () {

    let rawMaterialsPriceData;
    try {
        rawMaterialsPriceData = await db.getAll(collections.vendRawMatMapCollection);

        return {
            status: 200,
            success: true,
            message: 'Price mappings retrived',
            data: rawMaterialsPriceData
        }
    } catch (err) {

        return {
            status: 500,
            success: false,
            message: err.message || 'Internal server error'
        }
    }

}


module.exports = {
    saveMaterialMap,
    getAll
}


