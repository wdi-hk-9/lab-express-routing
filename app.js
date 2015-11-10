// Declaration
var candy = require('./candy.js');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var candyRouter = express.Router();

// Configure EJS (template engine) with Express
// app.set('views',       './views');
app.set('view engine', 'json');

// MIDDLEWARE
app.use(bodyParser.json());


candyRouter.get('/', function(req, res) {
  res.json(candy);
});


candyRouter.get('/candies/:id', function(req, res) {
  var candyId = candy[req.params.id-1];
  res.json(candyId);
});


candyRouter.post('/candies/new', function(req, res) {
  var
  res.json();
});


candyRouter.get('/:id/edit', function(req, res) {
  var path   = req.baseUrl + req.path;
  var method = 'GET';
  var action =  'EDIT';
  console.log("%s request to %s, this is the %s action", method, path, action);
  res.send('index');
});


candyRouter.put('/:id', function(req, res) {
  var path   = req.baseUrl + req.path;
  var method = 'PUT';
  var action =  'UPDATE';
  console.log("%s request to %s, this is the %s action", method, path, action);
  res.send('index');
});


candyRouter.delete('/:id', function(req, res) {
  var path   = req.baseUrl + req.path;
  var method = 'DELETE';
  var action =  'DELETE';
  console.log("%s request to %s, this is the %s action", method, path, action);
  res.send('index');
});

app.use("/candies", candyRouter);
app.use('/', candyRouter);

// Server Started
app.listen(port);
console.log('Server Started');
