var express = require('express');
var my = require('./candy');
var app     = express();
// process is coming from node
var port    = process.env.PORT || 3000;
var candyRouter = express.Router();
var bodyParser = require('body-parser');

//Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next){
  console.log ('%s request to %s from %s',
                req.method,
                req.path,
                req.ip)
  next();
});

//INDEX
candyRouter.get('/', function(req, res) {
    res.json(my.candy)
  res.send('index');
});


app.use("/candies", candyRouter);

//Server Started
app.listen(port);
console.log('Server started on ' + port);