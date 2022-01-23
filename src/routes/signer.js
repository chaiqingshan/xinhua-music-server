let express = require('express');
let router = express.Router();
let SignerService = new (require('./../service/signer.service'));

router.post('/signIn', function (req, res, next) {
    let body = req.body;
    SignerService.signIn(body).then(success => {
        res.send(success);
    }, failed => {
        res.send(failed)
    });
});

router.post('/signOut', function (req, res, next) {
    let body = req.body;
    SignerService.signOut(body).then(success => {
        res.send(success);
    }, failed => {
        res.send(failed)
    });
});

router.get('/getSigner', function (req, res, next) {
    SignerService.getSigner().then(result => {
        res.send(result)
    }, err => {
        res.send(err)
    })
});


module.exports = router;
