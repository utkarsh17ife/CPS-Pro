const { RawMaterial } = require('../models');
const db = require('../endpoint/db.util');
const { collections } = require('../const');


let saveRawMaterial = async (rawMaterialData) => {

    let rawMaterial;
    try {
        rawMaterial = new RawMaterial(rawMaterialData);
        await rawMaterial.save();

        return {
            status: 200,
            success: true,
            message: 'New Material created'
        }

    } catch (err) {

        return {
            status: 500,
            success: true,
            message: err.message || 'Internal server error'
        }

    }

}

let getAll = async () => {

    let rawMaterials;
    try {
        rawMaterials = await db.getAll(collections.rawMaterialCollection);
        return {
            status: 200,
            success: true,
            message: 'Materials retrived',
            data: rawMaterials
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
    saveRawMaterial,
    getAll
}


