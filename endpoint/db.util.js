const MongoClient = require('mongodb').MongoClient;
const { mongoUrl } = require('../const');
var db;


let connectToMongoDB = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongoUrl, function (err, dbInstance) {
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
      if (err) return reject({ message: "DB getAll Failed" });
      return resolve(result);
    })
  })
};




let getByQuery = (collectionName, query) => {
  return new Promise((resolve, reject) => {
    let collection = db.collection(collectionName);
    collection.find(query).toArray((err, result) => {
      if (err) return reject({ message: "DB get Failed" });
      return resolve(result);
    })
  })
}



let insert = (collectionName, data) => {
  return new Promise((resolve, reject) => {
    let collection = db.collection(collectionName);
    collection.insert(data, (err, result) => {
      if (err) return reject({ message: "DB Insert Failed" });
      return resolve({ message: "Data Inserted" });
    })
  })
};




let update = (collectionName, query, udpateData) => {
  return new Promise((resolve, reject) => {
    let collection = db.collection(collectionName);
    collection.update(query, udpateData, (err, result) => {
      if (err) return reject({ message: "DB update Failed" });
      return resolve({ message: "Data updated" });
    })
  })
};




module.exports = {
  connectToMongoDB,
  isConnected,
  getAll,
  getByQuery,
  insert,
  update
}

