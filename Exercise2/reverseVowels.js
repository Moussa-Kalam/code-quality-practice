/** Reverse Vowels in a string
 * A function that reverses the vowels in a string
 *
 */

const reverseVowels = (word) => {
  // Extract the vowels
  const vowels = word.match(/[aeiou]/gi);

  // Replace each vowel in the word by the last one of the vowels array
  return word.replace(/[aeiou]/gi, () => vowels.pop());
};

console.log(reverseVowels("Tomatoes"));
console.log(reverseVowels("Hello!"));
console.log(reverseVowels("Reverse Vowels In A String"));
