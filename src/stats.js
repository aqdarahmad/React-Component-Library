export const mean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
export const factorial = (n) => {
    if (n < 0)
        throw new Error("Cannot compute factorial of negative numbers");
    return n <= 1 ? 1 : n * factorial(n - 1);
};
export const factorialArray = (arr) => {
    if (!arr || arr.length === 0)
        return [];
    return arr.map(n => {
        if (n < 0)
            throw new Error("Cannot compute factorial of negative numbers");
        return n <= 1 ? 1 : n * factorial(n - 1);
    });
};
export const product = (arr) => {
    if (!arr || arr.length === 0)
        return 1;
    return arr.reduce((a, b) => a * b, 1);
};
export const sum = (arr) => {
    if (!arr || arr.length === 0)
        return 0;
    return arr.reduce((a, b) => a + b, 0);
};
//# sourceMappingURL=stats.js.map