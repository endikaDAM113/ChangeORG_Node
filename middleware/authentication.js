'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret_salt = 'secret-password-sotial-nework';

exports.ensureAuth = function (req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send({
            message: 'La peticion no tiene cabecera'
        })
    }
    var bearerHeader = req.headers.authorization.replace('/[\'\"]+/g', '');

    var parts = bearerHeader.split(' ');
    if(parts.length === 2) {
        var scheme = parts[0];
        var credentials = parts[1];
    }

    try {
        var payload = jwt.decode(credentials, secret_salt);
        if (payload.exp <= moment.unix()) {
            return res.status(401).send({
                message: 'Token expirado'
            });
        }
    } catch (error) {
        return res.status(404).send({
            message: 'Token no valido'
        });
    }
    req.user = payload;
    next();
}