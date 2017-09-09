var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var router = express.Router();

router.post('/', function(req,res,next) {
    var search = req.body.searchTerm;
    console.log('Got a POST request');
    console.log(search);
    res.send(search);
});


router.get('/', function(req,res,next) {
    res.render('results');
});


module.exports = router;
