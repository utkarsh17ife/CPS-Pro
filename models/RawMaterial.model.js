const { collections } = require('../const');
const db = require('../endpoint/db.util');

class RawMaterial {

    constructor(materialData) {
        this.rawMaterialId = materialData.rawMaterialId || null;
        this.name = materialData.name;
        this.type = materialData.type;
        this.unit = materialData.unit;
        this.unitType = materialData.unitType //1. length 2. weight 3. volume 
        this.properties = materialData.properties;
    }

    async save() {
        try {
            let rms = await db.getByQuery(collections.rawMaterialCollection, { type: this.type });
            if (!rms.length) {
                this.rawMaterialId = this.type + 10001;
            } else {
                this.rawMaterialId = this.type + 1000 + (rms.length + 1);
            }
            await db.insert(collections.rawMaterialCollection, this);
        } catch (err) {
            return err;
        }
    }


}

module.exports = RawMaterial;