const { collections } = require('../const');
const db = require('../endpoint/db.util');

class Item {

    constructor(itemData) {
        this.itemId = itemData.id || null;
        this.name = itemData.name;
        this.category = itemData.category;
        this.description = itemData.description;
        this.shortDescription = itemData.shortDescription;
        this.variables = itemData.variables;
    }


    async save() {
        try {
            let items = await db.getByQuery(collections.itemCollection, { category: this.category });
            if (!items.length) {
                this.itemId = this.category + 10001;
            } else {
                this.itemId = this.category + 1000 + (items.length + 1);
            }

            await db.insert(collections.itemCollection, this);
        } catch (err) {
            return err;
        }
    }

}


module.exports = Item;






