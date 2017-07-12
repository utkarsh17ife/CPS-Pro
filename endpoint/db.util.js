const { dbConn } = require('../const');

//DB connection and queries
const pg = require('pg');



var connectionString = dbConn;


var config = {
  user: 'PGUSER', 
  database: 'postgres', 
  password: '12345', 
  host: 'localhost',  
  port: 5432,  
  max: 10, 
  idleTimeoutMillis: 30000, 
};


const pool = new pg.Pool(config);


let query =(text, values, cb) =>{

  console.log('query:', text, values);

  return pool.query(text, values, callback);


};



let connect =(cb) =>{
  
  return pool.connect(cb);

};





module.exports = {
    query,
    connect
}