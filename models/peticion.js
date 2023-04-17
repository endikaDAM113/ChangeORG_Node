'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PeticionSchema = Schema({
// _id: Schema.ObjectId,
    titulo: String,
    descripcion: String,
    destinatario: String,
    firmantes:Number,
    estado: String,
    file: String,
    created_at: String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required:true
    },
    categoria: {
        type:mongoose.Types.ObjectId,
        ref: 'Categoria',
        required:true
    },
});
module.exports = mongoose.model('Peticion', PeticionSchema);