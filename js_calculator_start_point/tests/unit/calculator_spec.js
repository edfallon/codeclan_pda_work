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

  it('should equal 2 when subtracting 2 from 4', function(){
    calculator.previousTotal = 4
    calculator.subtract(2)
    assert.equal(calculator.runningTotal, 2)
  })

  it('should equal 10 when muliplying 2 and 5 ', function(){
    calculator.previousTotal = 2
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 10)
  })


});
