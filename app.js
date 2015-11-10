var candies = require('./candies')
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var candiesRouter = express.Router();

app.use(function(req, res, next){
  console.log('%s request to %s from %s', req.method, req.path, req.ip);
  next();
});

candiesRouter.get('/', function(req, res){
  // res.send('this is the INDEX');
  res.json({candies});
});

candiesRouter.get('/:id', function(req, res) {
  // var id = candies[req.params.id];
  res.json(req.params.id);
});

app.use('/candies', candiesRouter);

app.listen(port);
console.log('Sweet Server is running on ' + port);
// console.log(candies);