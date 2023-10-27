// Function that checks the level of nesting of an array and flattens the array into a single-dimension array

const array1 = [1, 2, [3, 4, [5, 5]]];

const array2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, [11, 12]]]]]];

const getArrayDepth = (inputArray, depth = 1) => {
  let arrayDepth = depth;

  /**
   * Iterate through each element of the array
   * Check if the current element is an array
   * Recursively call maxDepth to calculate the depth of the nested array
   * Update the arrayDepth if the current depth is greater
   */
  for (const element of inputArray) {
    if (Array.isArray(element)) {
      const currentDepth = getArrayDepth(element, depth + 1);
      arrayDepth = Math.max(arrayDepth, currentDepth);
    }
  }

  return arrayDepth;
};

// Function to flatten an array based on its nesting depth
const flattenArray = (inputArray) => {
  // Get the level on nesting of the array
  const nestingDepth = getArrayDepth(inputArray);

  return inputArray.flat(nestingDepth);
};

const flattenedArray1 = flattenArray(array1);
const flattenedArray2 = flattenArray(array2);
