//call the packages we need
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var candy      = require('./candy');
var port       = process.env.PORT || 3000;
var router     = express.Router();

//configure app to use body parser()
//this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//middleware to use for all requests
router.use(function(req,res,next){
  console.log('something is happening');
  //make sure you go to the next routes and dont stop here
  next();
});

//test
// router.get('/', function(req,res){
//   res.json({message:'horray!'});
// });

//index
router.get('/', function(req,res){
  res.json(candy);
});

//show
router.get('/:id', function(req,res){
  var candyId = candy[req.params.id];
  res.json(candyId);
});

//create
router.post('/', function(req,res) {
  var newCandy = {
    "id"    : candy.length + 1,
    "name"  : req.body.name,
    "color" : req.body.color
  };
  candy.push(newCandy);
  res.json(candy);
});

//update
router.put('/:id', function(req,res){
  var candyId = candy[req.params.id];
  candyId.name = req.body.name;
  candyId.color = req.body.color;
  res.json(candyId);
});

//delete
router.delete('/:id', function(res,req){
  var candyId = candy[req.params.id];
  candy.splice(candyId);
  res.json({message: 'deleted'});
});

//prefix routes with /candies
app.use('/candies', router);

//start server
app.listen(port);
console.log('Server started on ' + port);
