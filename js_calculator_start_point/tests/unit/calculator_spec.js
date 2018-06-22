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

  it('should equal 5 when dividing 10 by 2', function(){
    calculator.previousTotal = 10
    calculator.divide(2)
    assert.equal(calculator.runningTotal, 5)
  })

  it('should have a running total of 7 when 7 is clicked', function(){
    calculator.previousTotal = 0
    calculator.numberClick(7)
    assert.equal(calculator.runningTotal, 7)
  })

  it('should a running total of 2 when using the operatorClick + for 1 and 1', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 2)
  })


});
