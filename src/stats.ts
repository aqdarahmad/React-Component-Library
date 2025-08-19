export const mean = (arr: number[]) => arr.reduce((a,b) => a+b , 0 )/arr.length;
export const factorial = (n: number): number => {
  if (n < 0) throw new Error("Cannot compute factorial of negative numbers");
  return n <= 1 ? 1 : n * factorial(n - 1);
};
export const factorialArray = (arr?: number[]): number[] => {
  if (!arr || arr.length === 0) return [];
  return arr.map(n => {
    if (n < 0) throw new Error("Cannot compute factorial of negative numbers");
    return n <= 1 ? 1 : n * factorial(n - 1);
  });
};
export const product = (arr?: number[]): number => {
  if (!arr || arr.length === 0) return 1;
  return arr.reduce((a, b) => a * b, 1);
};
export const sum = (arr?: number[]): number => {
  if (!arr || arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0);
};

