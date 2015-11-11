var express = require('express');
var candy = require('./candy');
var app     = express();
// process is coming from node
var port    = process.env.PORT || 3000;
var candyRouter = express.Router();
var bodyParser = require('body-parser');

//Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//INDEX
candyRouter.get('/', function(req, res) {
  res.json(candy);
});

//SHOW
candyRouter.get('/:id', function(req, res) {
  var showCandy = candy[req.params.id-1];
  res.json(showCandy);
});

//CREATE
candyRouter.post('/', function(req, res) {

});


// UPDATE
candyRouter.put('/:id', function(req,res){
  var editCandy = candy[req.params.id-1];
  editCandy.name = req.body.name;
  editCandy.color = req.body.color;
  res.json(editCandy);
});

//DELETE
candyRouter.delete('/:id', function(req,res){
  var delCandy = candy.splice(req.params.id-1,1)
  res.json(delCandy);
})

app.use("/candies", candyRouter);

//Server Started
app.listen(port);
console.log('Server started on ' + port);