/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */

function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> "128"
  if (typeof password !== "string") password = String(password);

  // Early return if password is falsy or than 10 characters
  if (password.length < 10) return 0;

  // // This line creates a regular expression pattern that matches repeated characters.
  const regex = /(\w)(\1\1+|\1)/g;

  // This line uses the regular expression 'regex' to find matches in the 'password' variable and stores them in the 'matches' array.
  const repeatedChar = password.match(regex);

  // This section returns a score based on the matches found in the 'repeatedChar' array.
  // If there is no match, it returns 0
  return (
    repeatedChar?.reduce(
      (points, currentMatch) =>
        currentMatch.length > 2 ? points + 2 : points + 1,
      0
    ) || 0
  );
}

// My test
console.log(penaltyPoints("U2jSS277pQ"));
console.log(penaltyPoints("amGGAg8m0Q"));
console.log(penaltyPoints("70vSSS859Q"));
console.log(penaltyPoints("70vSSS85DDDD9Q"));
console.log(penaltyPoints("amdGAg8m0Q"));
console.log(penaltyPoints(""));
console.log(penaltyPoints(null));
