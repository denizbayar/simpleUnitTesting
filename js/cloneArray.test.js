const cloneArray = require('./cloneArray');

test('Test array clonning.', () => {
    let array = [1, 2, 3];
    expect(cloneArray(array)).toEqual(array); // Arrays values are equal
    expect(cloneArray(array)).not.toBe(array); // Arrays shows different places in memory
})