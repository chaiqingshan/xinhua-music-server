const mongoose = require('mongoose');
let Db = require('../db-config/db');

let Schema = mongoose.Schema;
let singerSchema = new Schema({
                        Farea: String,
                        Fattribute_3: String,
                        Fattribute_4: String,
                        Fgenre: String,
                        Findex: String,
                        Fother_name: String,
                        Fsinger_id: String,
                        Fsinger_mid: String,
                        Fsinger_name: String,
                        Fsinger_tag: String,
                        Fsort: String,
                        Ftrend: String,
                        Ftype: String,
                        voc: String
});

module.exports = new Db().getConnection().model('singer', singerSchema);