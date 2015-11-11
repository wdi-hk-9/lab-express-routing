// Declaration
var express     = require('express');
var app         = express();
var port        = process.env.PORT || 3000;
var candyRouter = express.Router();
var bodyParser  = require('body-parser');
var my          = require ('./candies');


// Configure EJS with Express
app.set('views', './views');
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log('%s request to %s from %s',
              req.method,
              req.path,
              req.ip);
  next();
});

// Routes
// INDEX
candyRouter.get('/', function(req, res) {
  res.json(my.candy);
});

// SHOW
candyRouter.get('/:id', function(req, res) {
  var candyId = req.params.id;
  res.json(my.getCandyById(candyId));
});

// CREATE
candyRouter.post('/', function(req, res) {
  var newCandy = {
    name: req.body.name,
    color: req.body.color
  }
  my.candy.push(newCandy);
  res.json(newCandy);
});

// UPDATE
// candyRouter.put('/:id', function(req, res) {
//   res.json();
// });

// // DELETE
// candyRouter.delete('/:id', function(req, res) {
//   res.json();
// });

app.use('/api/candies', candyRouter);


// Server started
app.listen(port);
console.log('Server started on ' + port);