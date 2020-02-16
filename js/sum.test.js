const sum = require('./sum');

test('properly summarizing two numbers', () => {
    expect(sum(1, 2)).toBe(3);
})