var express = require('express');
var path = require('path');
var router = express.Router();

router.post('/', function(req, res, next)
    {
        var login_user = '';
        console.log("account.js reporting in"); 
        login_user = req.body.input_user;
        console.log("Login from " + login_user);
        res.render('account', {
            'login_user': login_user 
        });
    }
);

router.get('/', function(req, res, next)
    {
        var login_user = '';
        res.render('account', {
            'login_user': login_user 
        });
    });

module.exports = router;
