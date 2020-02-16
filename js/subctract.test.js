const subtract = require('./substract');

test('properly substracting two numbers', () => {
    expect(subtract(1, 2)).toBe(-1)
})

