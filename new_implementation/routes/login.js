var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res, next)
    {
    res.render('login')
    });

module.exports=router;
