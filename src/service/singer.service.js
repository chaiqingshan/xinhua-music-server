let singerModel = require('../model/singer.model');
let crypto = require('crypto');
let Result = require('../utils/common-utils');
let {get_uuid} = require('../utils/common-model');

class SingerService {
    constructor() {

    }


    /**
     * 获取所有歌手
     * @returns {Promise<any>}
     */
    getSinger() {
        return new Promise((resolve, reject) => {
            singerModel.find({}).then(success => {
                resolve(success)
            }, failed => {
                reject(failed)
            })
        })
    }

}

module.exports = SingerService;