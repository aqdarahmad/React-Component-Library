export const add = (a: number, b: number) => a + b;
export const sub = (a: number, b: number) => a - b;
export const mul = (a: number, b: number) => a * b;
export const div = (a: number, b: number) => {
  if (b === 0) throw new Error("Cant divide");
  return a / b;
};
export const mod = (a: number, b: number) => a % b;
export const pow = (a: number, b: number) => Math.pow(a, b);
export const factorial = (n: number): number => {
  if (n < 0) throw new Error("Factorial not defined for negative numbers");
  return n <= 1 ? 1 : n * factorial(n - 1);
};
export const sum = (...nums: number[]) => nums.reduce((acc, val) => acc + val, 0);
export const average = (...nums: number[]) => sum(...nums) / nums.length;
export const negate = (x: number) => -x;
export const increment = (x: number) => x + 1;
export const decrement = (x: number) => x - 1