var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();
var candies = require('./candies');
var bodyParser = require('body-parser');

//middleware for bodyparser json
app.use(bodyParser.json());

// route
// INDEX
router.get('/',function(req,res){
  res.json(candies);
});
// SHOW
router.get('/:id',function(req,res){
  candies.forEach(function(elem){
    if (elem.id == req.params.id){
      res.status(200).json(elem);
    }
  });
  res.sendStatus(404);
});
// CREATE
router.post('/', function(req,res){
  var newItem = req.body;
  newItem.id = candies.length + 1;
  candies.push(newItem);
  res.json(req.body);
});
// UPDATE
router.put('/:id', function(req,res){
  candies.forEach(function(elem){
    if (elem.id == req.params.id){
      elem.name = req.body.name;
      elem.color = req.body.color;
      res.json(elem);
    }
  });
  res.sendStatus(422);
})
// DELETE
router.delete('/:id', function(req,res){
  candies.forEach(function(elem,index){
    if (elem.id == req.params.id){
      candies.splice(index,1);
      res.sendStatus(202);
    }
  });
  res.sendStatus(422);
})


// user routes middleware
app.use('/candies',router);

app.listen(port);
console.log("Server Connected");