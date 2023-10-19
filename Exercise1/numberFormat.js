const numberFormat = (number) => {
  // Regex to match groups of 1-3 digits followed by groups of 3 digits
  const regex = /(\d{1,3})(?=(\d{3})+$)/g;

  // Convert the number into a string
  // Add commas as a separator after a set of three digits starting from the end
  return String(number).replace(regex, "$1,");
};

console.log(numberFormat(100000));
console.log(numberFormat(58788545));
