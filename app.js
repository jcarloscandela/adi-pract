
var express     = require('express');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var apiRoutes   = require('./app/routes/routes')
var testRoutes   = require('./app/routes/testRoutes')
var app = express()

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// API ROUTES -------------------
app.use('/api', apiRoutes);
app.use('/test', testRoutes);
module.exports = app