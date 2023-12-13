function calculateCircleArea(radius) {
    if (radius < 0) {
        throw new Error("Radius cannot be negative");
    }
    const area = Math.PI * Math.pow(radius, 2);
    return area;
}

module.exports = calculateCircleArea;
