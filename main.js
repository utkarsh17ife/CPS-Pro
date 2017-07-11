const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');





//Initializing the apps
const app = express();
const http_server = http.createServer(app);
const https_server = https.createServer(sslOptions, app);



//adding body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




const user = require('./routes/user');
app.use('/user', user);










http_server.listen(3000, () => {
    console.log('http up on port 3000');
});

https_server.listen(433, () => {
    console.log('https up on port 433');
});