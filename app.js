var express    = require('express');
  // Fast, unopinionated, minimalist web framework
  // https://www.npmjs.com/package/express

var path       = require('path');
  // module with utilities for handling and transforming file paths
  // https://nodejs.org/docs/latest/api/path.html

var logger     = require('morgan');
  // HTTP request logger middleware for node.js
  // https://www.npmjs.com/package/morgan

var bodyParser = require('body-parser');
  // Node.js body parsing middleware
  // https://www.npmjs.com/package/body-parser



// http://expressjs.com/4x/api.html#express
var app = express();

// https://www.npmjs.com/package/morgan#dev
app.use(logger('dev'));

// https://www.npmjs.com/package/body-parser#bodyparser-json-options
app.use(bodyParser.json());

// https://www.npmjs.com/package/body-parser#bodyparser-urlencoded-options
app.use(bodyParser.urlencoded({ extended: true }));

// http://expressjs.com/4x/api.html#app.use
app.use(require('./controllers'));

// http://expressjs.com/4x/api.html#app.listen
app.listen(3000);
console.log('Server Started');
