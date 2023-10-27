// Function that converts a number to its binary representation

const toBinary = (input) => {
  // Check if the input is a number
  if (typeof input !== "number")
    throw new Error(
      `Your input is of type ${typeof input}. Please input a number.`
    );

  const binary = input.toString(2);
  return input > 0 ? binary : `1${binary.slice(1)}`;
};

console.log(toBinary(12));
console.log(toBinary(-12));
console.log(toBinary(7));
console.log(toBinary(true));
console.log(toBinary("hello"));
