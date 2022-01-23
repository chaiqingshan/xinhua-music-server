let signerModel = require('../model/signer.model');
let crypto = require('crypto');
let Result = require('../utils/common-utils');
let {get_uuid} = require('../utils/common-model');

class SignerService {
    constructor() {

    }

    /**
     * 签到
     * @param signer
     * @returns {Promise<any>}
     */
    signIn(signer) {
        let query={dept:signer.dept};
        let options={upsert:true};
        return new Promise((resolve, reject) => {
            signerModel.updateMany(query,signer,options).then(success => {
                resolve(Result.getSuccessInstance());
            }, failed => {
                reject(Result.getParameterErrorInstance());
            })
        })
    }

    /**
     * 签退
     * @param signer
     * @returns {Promise<any>}
     */
    signOut(signer) {
        let query={dept:signer.dept};
        return new Promise((resolve, reject) => {
            signerModel.updateMany(query,signer).then(success => {
                resolve(Result.getSuccessInstance());
            }, failed => {
                reject(Result.getParameterErrorInstance());
            })
        })
    }

    /**
     * 获取所有的用户
     * @returns {Promise<any>}
     */
    getSigner() {
        return new Promise((resolve, reject) => {
            signerModel.find({}).then(success => {
                resolve(success)
            }, failed => {
                reject(failed)
            })
        })
    }

}

module.exports = SignerService;