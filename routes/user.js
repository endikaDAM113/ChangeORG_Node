'use strict'

//load express router

var express = require('express');

var UserController = require('../controllers/user');

var api = express.Router();

var jwt = require('../services/jwt');

var md_auth = require('../middleware/authentication')
//routers
api.get('/home', UserController.home);
api.get('/pruebas', UserController.pruebas);
api.post('/saveUser', UserController.saveUser);
api.get('/getUsers/:page', UserController.getUsers);
//api.get('/users/:page?', md_auth.ensureAuth, UserController.getUsers);
api.post('/login', UserController.login);
api.get('/getUser', md_auth.ensureAuth, UserController.getUser);
api.put('/updateUser', UserController.updateUser);
api.delete('/deleteUser', md_auth.ensureAuth, UserController.deleteUser);
module.exports = api;