const { TestWatcher } = require('jest');
const calculator = require('../code/calculator');

test('Addition test', () =>{
    expect(calculator.add(1,3)).toBe(4);
})

test('Subtraction test', () =>{
    expect(calculator.sub(3,1)).toBe(2);
})

test('Multiplication test', () =>{
    expect(calculator.multiply(3,2)).toBe(6);
})

test('Division test', () =>{
    expect(calculator.divide(6,2)).toBe(3);
})