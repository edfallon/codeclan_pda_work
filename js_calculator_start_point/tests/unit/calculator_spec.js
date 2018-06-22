var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should equal 6 when adding 5 to previousTotal', function(){
    calculator.previousTotal = 1
    calculator.add(5)
    assert.equal(calculator.runningTotal, 6)
  })

});
