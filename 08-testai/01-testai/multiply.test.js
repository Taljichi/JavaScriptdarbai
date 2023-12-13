const multi = require('./multiply');

test('padaugina 2 * 2 isveda 4', () => {
    expect(multi(2, 2)).toBe(4);
})