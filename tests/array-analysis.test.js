const analyse = require('../code/array-analysis')


test('Testing natural numbers only', () =>{
    expect(analyse([1,2,3,4,5,6,7,8,9])).toBe('Average: 5, Max: 9, Min: 1, Length: 9')
})

test('Testing negative numbers only', () =>{
    expect(analyse([-9,-8,-7,-6,-5,-4,-3,-2,-1,])).toBe('Average: -5, Max: -1, Min: -9, Length: 9')
})

test('Testing for integral numbers', () =>{
    expect(analyse([-5,-2,5,3,4,7,0,1,8,0])).toBe('Average: 2.1, Max: 8, Min: -5, Length: 10')
})