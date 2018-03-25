const { collections } = require('../const');
const db = require('../endpoint/db.util');
const idPrefix = 'vendor';

class VendRawMatMap {
    constructor(venorMaterialMapData) {

        this.vendorMaterialId = venorMaterialMapData.vendorMaterialId;
        this.materialPropNameStr = venorMaterialMapData.materialPropNameStr;
        this.priceMap = venorMaterialMapData.priceMap;
    }

    async save() {

        let materialMapObj;
        try {
            materialMapObj = (await db.getByQuery(collections.vendRawMatMapCollection, { vendorMaterialId: this.vendorMaterialId }))[0];
            if (materialMapObj) {
                for (let key in this.priceMap) {
                    materialMapObj.priceMap[key] = this.priceMap[key]
                }
            } else {
                materialMapObj = this;
            }
            await db.upsert(collections.vendRawMatMapCollection, { vendorMaterialId: this.vendorMaterialId }, materialMapObj);

        } catch (err) {

            return err;
        }

    }


}



module.exports = VendRawMatMap;