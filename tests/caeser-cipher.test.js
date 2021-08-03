const caeser = require('../code/caeser-cipher')

test('checks null shift', () =>{
    expect(caeser('hi', 0)).toBe('hi')
})

test('Checks or empty string.Shift- 3', () =>{
    expect(caeser('', 3)).toBe('')
})

test('checks for 1 shift', () =>{
    expect(caeser('hello', 1)).toBe('ifmmp')
})

test('checks for 25 shift', () =>{
    expect(caeser('hello', 25)).toBe('gdkkn')
})

test('check for a sentence with punctuations.Shift-25', () =>{
    expect(caeser('i am a hero.', 25)).toBe('h zl z gdqn.')
})

test('check for Capital Letters.Shift-17', () =>{
    expect(caeser('I am The Hero.', 17)).toBe('Z rd Kyv Yvif.')
})