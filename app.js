var express = require('express');
var app = express();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var pg = require('pg');
var bodyParser = require('body-parser');
var routes = require('./routes');

app.use(morgan('tiny'));
app.use('/', bodyParser.json(), bodyParser.urlencoded(), routes);
app.use(express.static('public'));

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

app.listen(3000, function() { console.log('server listening') });

