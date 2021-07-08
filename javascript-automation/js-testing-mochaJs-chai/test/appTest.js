const assert = require('chai').assert;
// const app = require('../app');

// describe('App', () => {
//   it('app should be return hello', () => {
//     assert.equal(app(), 'hello');
//   });
// });

//  // multiple functions
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

// Results
const sayHelloResult = app.sayHello();
const addNumbersResult = app.addNumbers(5, 5);

describe('App', () => {

  describe('SayHello', () => {

    it('sayHello should be return hello', () => {
      // let result = app.sayHello();
      assert.equal(sayHelloResult, 'hello');
    });
  
    it('sayHello should return type string', () => {
      // let result = app.sayHello();
      assert.typeOf(sayHelloResult, 'string');
    });

  })

  describe('addNumbers' , () => {

  it('addNumber should be return above 5', () => {
    //  let result = app.addNumbers(5, 5);
     assert.isAbove(addNumbersResult, 5);
  });

  it('addNumber should be return type number', () => {
    // let result = app.addNumbers(5, 5);
    assert.typeOf(addNumbersResult, 'number');
  });

  })

});