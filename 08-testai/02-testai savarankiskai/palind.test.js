const isPalindrome = require('./palind');

describe('isPalindrome', () => {
    it('should return true for a valid palindrome', () => {
        expect(isPalindrome("A man, a plan, a canal. Panama")).toBe(true);
    });

    it('should return false for a non-palindrome', () => {
        expect(isPalindrome("Hello, World!")).toBe(false);
    });
});
