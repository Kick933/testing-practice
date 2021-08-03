const { TestWatcher } = require('jest')
const reverseString = require('../code/reverseString')

test('Test 1', () =>{
    expect(reverseString('hello')).toBe('olleh');
})

test('Test 2', () =>{
    expect(reverseString('We do not care.')).toBe('.erac ton od eW');
})

test('Test 3', () =>{
    expect(reverseString('123 hi')).toBe('ih 321');
})