// maxNumber.test.js

const findMaxNumber = require('./testas');

describe('findMaxNumber', () => {
    it('should find the maximum number in the array', () => {
        // Pavyzdys: [1, 5, 10, 3] - didžiausias skaičius yra 10
        expect(findMaxNumber([1, 5, 10, 3])).toBe(10);
    });

    it('should handle negative numbers', () => {
        // Pavyzdys: [-8, -3, -10, -5] - didžiausias skaičius yra -3
        expect(findMaxNumber([-8, -3, -10, -5])).toBe(-3);
    });

    it('should handle decimal numbers', () => {
        // Pavyzdys: [2.5, 1.1, 3.7, 2.2] - didžiausias skaičius yra 3.7
        expect(findMaxNumber([2.5, 1.1, 3.7, 2.2])).toBe(3.7);
    });

    it('should throw an error for empty input array', () => {
        // Pateikiame tuščią masyvą, turėtų išmesti klaidą
        expect(() => findMaxNumber([])).toThrow('Input should be a non-empty array of numbers');
    });

    it('should throw an error for non-array input', () => {
        // Pateikiame ne masyvą, turėtų išmesti klaidą
        expect(() => findMaxNumber('not an array')).toThrow('Input should be a non-empty array of numbers');
    });
});
