const capitalize = require('../code/capitalize');

test('Test 1', () =>{
    expect(capitalize('hi')).toBe('Hi');
})

test('Test 2', () =>{
    expect(capitalize('wORLD')).toBe('WORLD');
})

test('Test 3', () =>{
    expect(capitalize('how is it going')).toBe('How is it going');
})