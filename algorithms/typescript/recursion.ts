const factorial = (n: number): number => {
  if (n < 2) return 1;

  return n * factorial(n - 1);
};

const fibonacci = (n: number): number => {
  if (n < 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(factorial(10));
console.log(fibonacci(10));
