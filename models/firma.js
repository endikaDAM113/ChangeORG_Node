'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FirmaSchema = Schema({
// _id: Schema.ObjectId,
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required:true
    },
    peticion: {
        type:mongoose.Types.ObjectId,
        ref: 'Peticion',
        required:true
    },
    created_at: String,
});
module.exports = mongoose.model('Firma', FirmaSchema);