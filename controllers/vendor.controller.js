const { VendorModel } = require('../models');
const db = require('../endpoint/db.util');
const { collections } = require('../const');
const _ = require('lodash');

let saveVendor = async (vendorData) => {

    let vendor;
    try {
        vendor = new VendorModel(vendorData);
        await vendor.save();

        return {
            status: 200,
            success: true,
            message: 'New Vendor added'
        }

    } catch (err) {

        return {
            status: 500,
            success: false,
            message: err.message || 'Internal server error'
        }

    }

}

let getAll = async () => {

    let vendors;
    let rawMaterials = [];
    let rawMaterialsData;
    try {
        vendors = await db.getAll(collections.vendorCollection);

        vendors.forEach(vendor => {
            if (vendor && vendor.rawMaterialsList && vendor.rawMaterialsList.length)
                rawMaterials = rawMaterials.concat(vendor.rawMaterialsList);
        });

        //get the unique values
        rawMaterials = Array.from(new Set(rawMaterials));
        rawMaterialsData = await db.getByQuery(collections.rawMaterialCollection, { rawMaterialId: { $in: rawMaterials } });

        vendors.forEach(vendor => {
            vendor.rawMaterials = _.filter(rawMaterialsData, function (p) {
                return _.includes(vendor.rawMaterialsList, p.rawMaterialId);
            });
        })

        return {
            status: 200,
            success: true,
            message: 'Vendors retrived',
            data: vendors
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
    saveVendor,
    getAll
}


