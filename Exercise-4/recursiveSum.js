/**
 * Find the sum of all element in an array
 * Using recursion
 */

const recursiveArraySum = (inputArray, index = 0) => {
  if (index === inputArray.length) return 0;

  // Add the current element to the sum of the rest of the elements
  return inputArray[index] + recursiveArraySum(inputArray, index + 1);
};

// Tests
const numbers = [1, 2, 3, 4, 5, 10];
const sum = recursiveArraySum(numbers);
console.log(sum);
