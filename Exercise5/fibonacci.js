const calculateFibonacci = (number) => {
  if (number < 2) return number;

  // Initialize variables to keep track of Fibonacci elements
  let element1 = 0,
    element2 = 1,
    currentElement; // Variable to calculate and store the current Fibonacci element

  for (let i = 2; i <= number; i++) {
    // Calculate the current Fibonacci element by adding the last two elements
    currentElement = element1 + element2;

    // Update the values of element1 and element2 for the next iteration
    element1 = element2;
    element2 = currentElement;
  }

  // Final calculated Fibonacci element
  return currentElement;
};
console.log(calculateFibonacci(10));
console.log(calculateFibonacci(0));
console.log(calculateFibonacci(1));
console.log(calculateFibonacci(2));
console.log(calculateFibonacci(3));
console.log(calculateFibonacci(4));
console.log(calculateFibonacci(6));
