const calculateFibonacci = (number) => {
  if (number === 0) return 0;

  // Initialize variables to keep track of Fibonacci elements
  let element1 = 0, // First Fibonacci element
    element2 = 1, // Second Fibonacci element
    currentElement; // Variable to calculate and store the current Fibonacci element

  // Loop to calculate the Fibonacci elements up to the given number
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
