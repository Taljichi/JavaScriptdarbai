const calculateCircleArea = require('./scripts');

describe('calculateCircleArea', () => {
    it('should calculate the area of a circle correctly', () => {
        expect(calculateCircleArea(5)).toBeCloseTo(78.54, 2);
    });

    it('should throw an error for negative radius', () => {
        expect(() => calculateCircleArea(-1)).toThrow('Radius cannot be negative');
    });
});
