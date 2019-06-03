/* const factorial = n => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
 */
const factorial = n => {
  const fact = (x, n) => {
    if (n === 0) {
      return x;
    } else {
      return fact(n * x, n - 1);
    }
  };
  return fact(1, n);
};

console.log(factorial(4));
