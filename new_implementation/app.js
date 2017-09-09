var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var index = require('./routes/index.js'); // Include our index.js file from 'routes' folder.
var search = require('./routes/search.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public'))); // Expose the 'public' folder.
app.set('views', path.join(__dirname, 'views')); // Make sure we have the right 'views' folder defined.

app.set('view engine', 'ejs');

app.use('/', index); // Serve the index page.
app.use('/api/search', search);
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.listen(3000);
console.log('Server running on port 3000');
