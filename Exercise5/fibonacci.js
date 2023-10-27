const calculateFibonacci = (number, array = [0, 1]) => {
  if (number <= 2) return array;

  // Get the last two element of the array
  const [nextToLast, last] = array.slice(-2);

  // Return the fibonacci sequence up to the given number
  return calculateFibonacci(number - 1, [...array, nextToLast + last]);
};

console.log(calculateFibonacci(12));
console.log(calculateFibonacci(0));
console.log(calculateFibonacci(1));
console.log(calculateFibonacci(2));
console.log(calculateFibonacci(3));
console.log(calculateFibonacci(4));
console.log(calculateFibonacci(6));
