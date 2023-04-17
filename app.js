'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//load routes
var user_routes = require('./routes/user');
//var peticion_routes = require('./routes/peticion');
//var firma_routes = require('./routes/firma');
//Middlewares (everytime before calling a controller)
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json()); //transforma a json, para todo lo que reciba
//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-RequestMethod');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT,DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//routes
app.use('/api', user_routes); //middleware para reescribir las routes /api/home /api/pruebas
//app.use('/api', peticion_routes); //middleware para reescribir las routes /api/home /api/pruebas
//app.use('/api', firma_routes); //middleware para reescribir las routes /api/home /api/pruebas
//exportar la configuración

module.exports = app;