// Function that checks the level of nesting of an array and flattens the array into a single-dimension array

const nestedArray1 = [1, 2, [3, 4, [5, 5]]];

const nestedArray2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [11, 12]]]]]];

const maxDepth = (arr, depth = 1) => {
  // Initialize a variable to track the maximum depth encountered
  let arrayDepth = depth;

  /**
   * Iterate through each element of the array
   * Check if the current element is an array
   * Recursively call maxDepth to calculate the depth of the nested array
   * Update the arrayDepth if the current depth is greater
   */
  for (let element of arr) {
    if (Array.isArray(element)) {
      const currentDepth = maxDepth(element, depth + 1);
      arrayDepth = Math.max(arrayDepth, currentDepth);
    }
  }

  return arrayDepth;
};

// Get the level of nesting of the arrays
const nestedDepth1 = maxDepth(nestedArray1);
const nestedDepth2 = maxDepth(nestedArray2);

// Flatten the first array based on its nesting depth
const flattenedArray1 = nestedArray1.flat(nestedDepth1);
console.log(flattenedArray1);

// Flatten the second array based on its nesting depth
const flattenedArray2 = nestedArray2.flat(nestedDepth2);
console.log(flattenedArray2);
