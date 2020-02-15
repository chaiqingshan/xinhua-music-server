let express = require('express');
let router = express.Router();
let SingerService = new (require('./../service/singer.service'));

router.get('/singerList', function (req, res, next) {
    SingerService.getSinger().then(result => {
        res.send(result)
    }, err => {
        res.send(err)
    })
});


module.exports = router;
