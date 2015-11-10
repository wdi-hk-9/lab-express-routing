var express    = require('express'),
    router     = express.Router(),
      // http://expressjs.com/4x/api.html#router
    bodyParser = require('body-parser'),
      // https://www.npmjs.com/package/body-parser
    methodOverride = require('method-override');
      // https://www.npmjs.com/package/method-override

candies = [
  {id: 1, name: "Chewing Gum" , color: "Red"   },
  {id: 2, name: "Pez"         , color: "Green" },
  {id: 3, name: "Marshmallow" , color: "Pink"  },
  {id: 4, name: "Candy Stick" , color: "Blue"  }
]

// http://127.0.0.1:3000/candies
router.route('/')
  // INDEX
  .get(function(req, res, next) {
    res.json(candies);
  })
  // CREATE
  .post(function(req, res) {
    candies.push(req.body)
    res.json(req.body);
  });

// http://127.0.0.1:3000/candies/:id
router.route('/:id')
  // SHOW
  .get(function(req,res){
    candy = candies.filter(function(element){
      return element["id"] == req.params.id
    })[0]
    res.json(candy)
  })
  // DELETE
  .delete(function(req, res){
    for(i in candies){
      if(candies[i]["id"] == req.params.id){
        delete candies[i]
      }
    }
    res.json({message : 'deleted' });
  });

// http://127.0.0.1:3000/candies/:id
router.route('/:id/edit')
  // UPDATE
  .put(function(req, res) {
    for (i in candies) {
      if (candies[i]["id"] == req.params.id) { candies[i] = req.body }
    }
    res.format({
      json: function(){ res.json(req.body); }
    })
  })

module.exports = router
