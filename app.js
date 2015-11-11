// Initialization
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var candies = require('./candy');

//Routes
var candyRouter = express.Router();

//Index
candyRouter.get('/', function(req, res){
  res.json(candies);
});

//Show
candyRouter.get('/:id', function(req, res){
  var candy = candies.getCandyById(req.params.id)
  res.json(candy);
});

//Create
candyRouter.post('/', function(req, res){
  var candy = candies.addCandy(req.params)
  res.json(candy);
});

//Update
candyRouter.put('/:id', function(req, res){
  res.json("This is Update");
});

//delete
candyRouter.delete('/:id', function(req, res){
  var candy = candies.getCandyById(req.params.id)
  res.json(candy);
});

app.use('/candies', candyRouter) ///now it turns router become a middleware

// Server Started
app.listen(port);
console.log('Server started');