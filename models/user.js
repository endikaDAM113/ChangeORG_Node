'use strict'
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    image: String
});

UserSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('User', UserSchema);