var
  express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser'),
  candy = require('./candy'),
  router = express.Router(),
  candies = [];

// SETUP
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(function(req, res,next){
  console,log('%s request to %s from %s',
    req.method,
    req.path,
    req.ip);
  next();
});
app.use('/candies', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
// create
router.post('/', function(req, res){
  var
    id = candies.length + 1,
    candy = new candy(id, req.body.name, req.body,color );

  candies.push(candy);
  res.json(candy);
});

// index
router.get('/', function(req, res){
  res.json(candies);
});

// show
router.get('/:id', function(req, res){
  var id = req.params.id;
  res.json(candies[id-1]);
});

// update
router.put('/:id', function(req, res){
  var id = req.params.id;
  candies[id-1].name = req.body.name;
  candies[id-1].color = req.body.color;
  res.json(candies[id-1]);
});

// delete
router.delete('/:id', function(req, res){
  var id = req.params.id;
  candies.splice(id-1,1);
  res.json(candies);
});

// start server
app.listen(port);
console.log('Server started on ' + port);
