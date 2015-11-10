var should    = require('chai').should();
  // http://chaijs.com/guide/styles/#should

var supertest = require('supertest');
  // https://www.npmjs.com/package/supertest

// var assert = require('assert');
// https://www.npmjs.com/package/assert

api = supertest('http://localhost:3000');

describe('GET /candies', function(){
  it('respond with json', function(done){
    api
      .get('/candies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
      .expect(function(res){
        var candies = res.body;
        // console.log(candies);

        res.body.should.be.a('Array');
        res.body.should.not.be.a('String');

        // Testing First Element
        var first = res.body[0];
        first.should.have.property('id').equal(1);
        first.should.have.property('name').equal('Chewing Gum');
        first.should.have.property('color').equal('Red');

        // Testing Last element
        var fourth = res.body[3];
        fourth.should.have.property('id').equal(4);
        fourth.should.have.property('name').equal('Candy Stick');
        fourth.should.have.property('color').equal('Blue');

        // If all test pass, return true to expect()
        return true;
      })
  })
})

describe('GET /candies/1', function(){
  it('respond with json', function(done){
    api
      .get('/candies/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
      .expect(function(res){
        var candy = res.body;

        candy.should.be.a('Object');
        candy.should.not.be.a('String');

        // Testing a particular element
        candy.should.have.property('id').equal(1);
        candy.should.have.property('name').equal('Chewing Gum');
        candy.should.have.property('color').equal('Red');

        // If all test pass, return true to expect()
        return true;
      })
  })
})

// describe('Array', function() {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal(-1, [1,2,3].indexOf(5));
//       assert.equal(-1, [1,2,3].indexOf(0));
//     });
//   });
// });
