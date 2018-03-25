const { collections } = require('../const');
const db = require('../endpoint/db.util');
const idPrefix = 'vendor';

class Vendor {

    constructor(vendorData) {
        this.vendorId = vendorData.vendorId || null;
        this.name = vendorData.name;
        this.address = vendorData.address;
        this.location = vendorData.location;
        this.tin = vendorData.tin;
        this.rawMaterialsList = vendorData.rawMaterialsList;
    }

    async save() {
        try {
            let vendors = await db.getAll(collections.vendorCollection);
            if (!vendors.length) {
                this.vendorId = idPrefix + 10001;
            } else {
                this.vendorId = idPrefix + 1000 + (vendors.length + 1);
            }
            await db.insert(collections.vendorCollection, this);
        } catch (err) {
            return err;
        }
    }

}

module.exports = Vendor;