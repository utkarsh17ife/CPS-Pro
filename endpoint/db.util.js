const MongoClient = require('mongodb').MongoClient;
const { mongoUrlLabs, mongoUrlLocal } = require('../const');
var db;


let connectToMongoDB = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongoUrlLocal, function (err, dbInstance) {
      if (err) return reject({ Error: "MongoDB" });
      db = dbInstance;
      return resolve();
    })
  })
}



let isConnected = () => {
  if (db) {
    return true;
  } else {
    return false;
  }
}





let getAll = (collectionName, cb) => {
  return new Promise((resolve, reject) => {
    let collection = db.collection(collectionName);
    collection.find({}).toArray((err, result) => {
      if (err) return reject(err);
      return resolve(result);
    })
  })
};




let getByQuery = (collectionName, query) => {
  return new Promise((resolve, reject) => {
    let collection = db.collection(collectionName);
    collection.find(query).toArray((err, result) => {
      if (err) return reject(err);
      return resolve(result);
    })
  })
}



let insert = (collectionName, data) => {
  data.timeStamp = Date.now();
  return new Promise((resolve, reject) => {
    let collection = db.collection(collectionName);
    collection.insert(data, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    })
  })
};




let update = (collectionName, query, udpateData) => {
  return new Promise((resolve, reject) => {
    let collection = db.collection(collectionName);
    collection.update(query, udpateData, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    })
  })
};




let upsert = (collectionName, query, updateData) => {
  return new Promise((resolve, reject) => {
    let collection = db.collection(collectionName);
    //remove the mongoID from object data
    if (updateData._id) delete updateData._id;
    collection.update(query, updateData, { upsert: true }, (err, result) => {
      if (err) return reject(err);
      return resolve(result);
    })
  })
};



let getLastOneRecordByQuery = (collectionName, query) => {
  return new Promise((resolve, reject) => {
    let collection = db.collection(collectionName);
    collection.find(query).sort({ timeStamp: -1 }).limit(1).toArray((err, result) => {
      if (err) return reject(err);
      return resolve(result);
    })
  })
}






module.exports = {
  connectToMongoDB,
  isConnected,
  getAll,
  getByQuery,
  insert,
  update,
  upsert,
  getLastOneRecordByQuery
}

