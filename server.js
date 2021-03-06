const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const { mongoUtil } = require('./endpoint');


var port = process.env.PORT || 3000;


var client = __dirname + '/client';

//Initializing the apps
const app = express();
//const http_server = http.createServer(app);
//const https_server = https.createServer(sslOptions, app);
app.use(express.static(client));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//adding body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/item', require('./routes/item'));
app.use('/rawMaterial', require('./routes/rawMaterial'));
app.use('/vendor', require('./routes/vendor'))
app.use('/vendRawMatMap', require('./routes/vendRawMatMap'))


//Error handling middleware
app.use((err, req, res, next) => {

    res.status(400).send({
        status: err.status || 400,
        success: false,
        message: err.statusText || 'Bad request',
        err: err.errors
    })

});


//Connect to DB before starting http server
mongoUtil.connectToMongoDB()
    .then(result => {

        app.listen(port, () => {
            console.log('http up on port ' + port);
        });

        // https_server.listen(433, () => {
        //     console.log('https up on port 433');
        // });
    })
    .catch(err => {
        console.log(err);
    })





module.exports = app



