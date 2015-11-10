// Declaration
var candy = require('./candy.js');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var candyRouter = express.Router();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// INDEX
candyRouter.get('/', function(req, res) {
  res.json(candy);
});

// SHOW
candyRouter.get('/candies/:id', function(req, res) {
  var candyId = candy[req.params.id-1];
  res.json(candyId);
});

// CREATE
candyRouter.post('/candies', function(req, res) {
  var newCandy = {
    "id": candy.length+1, "name": req.body.name , "color": req.body.color
  }
  candy.push(newCandy)
  res.json(candy);
});

//UPDATE
candyRouter.put('/:id', function(req,res){
  var updateCandy =
  candy[req.params.id-1];
  candy.name = req.body.name;
  candy.color = req.body.color;
  candy.splice(updateCandy); //HOLY WOW WHAT DO I DO HERE
  res.json(updateCandy);
});


app.use("/candies", candyRouter);


// Server Started
app.listen(port);
console.log('Server Started');
