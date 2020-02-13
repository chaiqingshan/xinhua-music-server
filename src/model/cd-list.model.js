const mongoose = require('mongoose');
let Db = require('../db-config/db');

let Schema = mongoose.Schema;
let cdListSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        // ref: 'user'
    },
    cdName: String,
    songNum: Number,
    description: String,
    meta: {
        createAt: {
            type: Date,
            default: new Date()
        },
        updateAt: {
            type: Date,
            default: new Date()
        }
    }
});

module.exports = new Db().getConnection().model('cd_list', cdListSchema);