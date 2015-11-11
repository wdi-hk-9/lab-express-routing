var candies = [
  {
    id    : 1,
    name  : "Chewing Gum",
    color : "Red"
  },
  {
    id    : 2,
    name  : "Pez",
    color : "Green"
  },
  {
    id    : 3,
    name  : "Marshmallow",
    color : "Pink"
  },
  {
    id    : 4,
    name  : "Candy Stick",
    color : "Blue"
  }
];

module.exports.candy = candies

module.exports.getAllCandies = function() {
  return candies;
};

module.exports.getCandyById = function(id) {
  for (var i = 0; i < candies.length; i++) {
    if (candies[i].id == id) {
      return candies[i];
    }
  }
};
