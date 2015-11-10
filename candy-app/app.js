var express = require('express');
var candies = require('./candy.js');

var app     = express();
var port    = process.env.PORT || 3000;
var candyRouter  = express.Router();
var bodyParser = require('body-parser');

// app.set('views', './views');
// app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
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
  var candy = candies.getCandyById(req.params.id);
  res.json(candy);
});

//   //NEW
// candyRouter.get('/new', function(req, res) {
// });

//   // CREATE
// candyRouter.post('/', function(req, res) {
//   // var Candy = new Candy();
//   // Candy.name = req.Candy.name;
//   // Candy.save();
//   // res.send("Candy created");
//   res.render('Candy created');
// });

//   // EDIT
// candyRouter.get('/:id/edit', function(req, res) {
//   // res.json(candy.req.params.id)
//   res.json(req.params.id);
// });

//   // UPDATE
// candyRouter.put('/:id', function(req, res) {
//   var Candy = Candy.req.params.id;
//   Candy.name = req.body.name;
//   Candy.save();
//   res.send("Candy updated")
// });

//   // DESTROY
// candyRouter.delete('/:id', function(req, res) {
//   Candy.remove({
//     _id: req.params.id
//   }, function(err, bear){
//       if (err)
//         res.send(err);

//       res.json({ message: 'Successfully deleted'});
//   })
// });

app.use('/candies', candyRouter);

app.listen(port);
console.log('Server started on ' + port);