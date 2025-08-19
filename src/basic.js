export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;
export const div = (a, b) => {
    if (b === 0)
        throw new Error("Cant divide");
    return a / b;
};
export const mod = (a, b) => a % b;
export const pow = (a, b) => Math.pow(a, b);
export const factorial = (n) => {
    if (n < 0)
        throw new Error("Factorial not defined for negative numbers");
    return n <= 1 ? 1 : n * factorial(n - 1);
};
export const sum = (...nums) => nums.reduce((acc, val) => acc + val, 0);
export const average = (...nums) => sum(...nums) / nums.length;
export const negate = (x) => -x;
export const increment = (x) => x + 1;
export const decrement = (x) => x - 1;
//# sourceMappingURL=basic.js.map