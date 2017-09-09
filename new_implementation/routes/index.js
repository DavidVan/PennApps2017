var express = require('express');
var path = require('path');
var router = express.Router();

// Handle GET request for index page.
router.get('/', function(req, res, next) {
    res.render('index', {
        content: 'Hello World!'
    });
});

module.exports = router;
