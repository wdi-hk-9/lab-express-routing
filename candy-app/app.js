var express = require('express');
var candies = require('./candy');

var app     = express();
var port    = process.env.PORT || 3000;
var candyRouter  = express.Router();
var bodyParser = require('body-parser');

// app.set('views', './views');
// app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

candyRouter.use(function(req, res, next) {
  console.log('%s request to %s from %s', req.method, req.path, req.ip);
  next();
});

//INDEX
candyRouter.get('/', function(req, res) {
  res.json(candies);
});

  // SHOW
candyRouter.get('/:id', function(req, res) {
  var candy = candies[req.params.id];
  res.json(candy);
});

//   //NEW
// candyRouter.get('/new', function(req, res) {
// });

// CREATE
candyRouter.post('/', function(req, res) {
  // console.dir(req.body);
  var newCandy = {
    "id" : candies.length+1,
    "name" : req.body.name,
    "color" : req.body.color
  };
  candies.push(newCandy);
  res.json(candies);
});

//   // EDIT
// candyRouter.get('/:id/edit', function(req, res) {
//   // res.json(candy.req.params.id)
//   res.json(req.params.id);
// });

  // UPDATE
candyRouter.put('/:id', function(req, res) {
  var candy = candies[req.params.id];
  candy.name = req.body.name;
  candy.color = req.body.color;
  res.json(candy);
});

  // DESTROY
candyRouter.delete('/:id', function(req, res) {
  candies.splice(req.params.id-1, 1);
  res.json({ message: 'Successfully deleted'});
});

app.use('/candies', candyRouter);

app.listen(port);
console.log('Server started on ' + port);