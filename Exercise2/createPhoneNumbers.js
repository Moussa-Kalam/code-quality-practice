/** Create Phone Number
 * Function that accept an array of integers between (0 and 9)
 * Returns a string of those numbers in the form of a phone number
 * Example: (123) 456-7890
 */

const createPhoneNumber = (numbers) => {
  // A regex to group the numbers in the given format
  const groups = /(\d{3})(\d{3})(\d{4})/;

  // Join the array number and reformat the string using the groups from the regex
  return numbers.join("").replace(groups, "($1) $2-$3");
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
