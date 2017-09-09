var express = require('express');
var path = require('path');
var router = express.Router();

router.post('/', function(req,res,next) {
    var search = req.body.searchTerm;
    console.log('Got a POST request');
    console.log(search);
});

module.exports = router;
