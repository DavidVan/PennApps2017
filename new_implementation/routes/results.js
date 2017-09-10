var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var router = express.Router();
var firebase = require('../firebase');
var data = '';

router.post('/', function(req,res,next) {
    var desired = new Array();
    var searchTerm = req.body.searchTerm;
    console.log('Got a POST request');
    console.log(searchTerm);
    console.log("Searching through database...");

    firebase.getData(function(products){
        data = products;
        //console.log(data);

        res.render('results',
            {
                'searchTerm' : searchTerm,
                'data' : data
             });
    });

});

router.get('/', function(req,res,next) {
    res.render('results');
});


module.exports = router;
