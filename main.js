const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const { mongoUtil } = require('./endpoint');




//Initializing the apps
const app = express();
const http_server = http.createServer(app);
//const https_server = https.createServer(sslOptions, app);



//adding body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





const user = require('./routes/user');
app.use('/user', user);
const item = require('./routes/item');
app.use('/item', item);










//Connect to DB before starting http server
mongoUtil.connectToMongoDB()
.then(result=>{

    http_server.listen(3000, () => {
        console.log('http up on port 3000');
    });

    // https_server.listen(433, () => {
    //     console.log('https up on port 433');
    // });
})
// .catch(err=>{
//     console.log(err);
// })




