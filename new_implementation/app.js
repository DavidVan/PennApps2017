var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var firebase = require('./firebase');

var index = require('./routes/index.js'); // Include our index.js file from 'routes' folder.
var search = require('./routes/search.js');
var results = require('./routes/results.js');
var account = require('./routes/account.js');
var login = require('./routes/login.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public'))); // Expose the 'public' folder.
app.set('views', path.join(__dirname, 'views')); // Make sure we have the right 'views' folder defined.

app.set('view engine', 'ejs');

app.use('/', index); // Serve the index page.
app.use('/results', results);
app.use('/account', account);
app.use('/login', login);
app.use('/api/search', search);


app.listen(3000);
console.log('Server running on port 3000');
