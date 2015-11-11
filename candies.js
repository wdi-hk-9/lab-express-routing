var candies = [ { "id":1,
                  "name":"Chewing Gum",
                  "color":"Red"},
                { "id":2,
                  "name":"Pez",
                  "color":"Green"},
                { "id":3,
                  "name":"Marshmallow",
                  "color":"Pink"},
                { "id":4,
                  "name":"Candy Stick",
                  "color":"Blue"}]

module.exports.getCandies = candies;

module.exports.addCandies = function(req, res){
  var newCandy = {
    "name" : req.body.name,
    "color" : req.body.color
  };
  candies.push(newCandy);
  res.send(req.body);
};

module.exports.findById = function(req, res) {
  res.send({id:req.params.id, name: "The Name", color: "The color"});
};

/* 2nd version to get ID (looping)
module.exports.getCandyById = function(id) {
  for (var key in candies) {
    if (candies[key].id == id)
      return candies[key];
  }
};
*/

module.exports.candies = candies;
console.log("module CANDIES initialized")
