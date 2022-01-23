const mongoose = require('mongoose');
let Db = require('../db-config/db');

let Schema = mongoose.Schema;
let singerSchema = new Schema({
    dept: String,
    name: String
});

module.exports = new Db().getConnection().model('signer', singerSchema);