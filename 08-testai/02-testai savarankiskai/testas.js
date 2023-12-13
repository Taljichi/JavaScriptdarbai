function findMaxNumber(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Input should be a non-empty array of numbers');
    }

    return Math.max(...numbers);
}

module.exports = findMaxNumber;
