// Function that converts a number to its binary representation

const toBinary = (input) => {
  // Check if the input is a number
  if (typeof input !== "number")
    throw new Error(
      `Your input is of type ${typeof input}. Please input a number.`
    );
  return input.toString(2);
};

console.log(toBinary(2));
console.log(toBinary(7));
console.log(toBinary(true));
console.log(toBinary("hello"));
