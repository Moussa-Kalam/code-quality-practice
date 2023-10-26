/**
 * Function that removes duplicates element from an array
 */

const removeDuplicates = (inputArray) => [...new Set(inputArray)];

console.log(removeDuplicates([1, 1, 3, 5, 6, 6, 6, 3, 4, 2, 5, 3]));
