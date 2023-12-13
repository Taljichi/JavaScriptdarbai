const sum = require('./scripts');

test('prideda 1 + 2 isveda 3', () => {
    expect(sum(1, 2)).toBe(3);
})