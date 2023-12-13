// alwaysReturnNull.test.js

const alwaysReturnNull = require('./null');

describe('alwaysReturnNull', () => {
    it('should always return null', () => {
        const result = alwaysReturnNull();

        expect(result).toBeNull();
    });
});
