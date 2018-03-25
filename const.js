module.exports = {
    mongoUrlLocal: 'mongodb://127.0.0.1/cpsdb',
    mongoUrlLabs: 'mongodb://projectCPS:cpsProjectDB123@ds123933.mlab.com:23933/cpsdb',
    devLogger: true,
    collections: {
        userCollection: "users",
        itemCollection: "items",
        rawMaterialCollection: "rawMaterials",
        vendorCollection: "vendors",
        vendRawMatMapCollection: "vendorMaterialMapping"         
    }
};



