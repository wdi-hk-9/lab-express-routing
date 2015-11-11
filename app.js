var mycandies = require('./candies')
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var candiesRouter = express.Router();
var bodyParser = require('body-parser');

app.use(function(req, res, next){
  console.log('%s request to %s from %s', req.method, req.path, req.ip);
  next();
});
app.use(bodyParser.json());


// INDEX
candiesRouter.get('/', function(req, res){
  res.json(mycandies.getCandies);
});

// SHOW
candiesRouter.get('/:id', mycandies.findById);
  /* 2nd version
    candiesRouter.get('/:id', function(req, res) {
      var id = candies.getCandyById(req.params.id);
      res.status(200).json(id);
    });
  */

// CREATE
candiesRouter.post('/', mycandies.addCandies);

// UPDATE
candiesRouter.put('/:id', function(req, res) {
  var candy = mycandies.getCandies[req.params.id]
  candy.id = mycandies.getCandies + 1
  candy.name = req.body.name;
  candy.color = req.body.color;
  res.json(candy);
});

// DELETE
candiesRouter.delete('/:id', function(req, res) {
  mycandies.getCandies.splice(req.params.id-1, 1)
  res.json({"message":"deleted"})
});

app.use('/candies', candiesRouter);

app.listen(port);
console.log('Sweet Server is running on ' + port);
console.log(mycandies.getCandies);