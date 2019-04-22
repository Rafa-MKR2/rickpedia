const express = require('express')
const consing = require("consign")
const bodyParser = require('body-parser')

module.exports = () =>{
    var app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.json({ type: 'application/*+json' }))
 
    app.use(express.static('app'));

    consing().include('routers').into(app);


    return app;
}