// List of forbidden passwords
const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") {
    password = String(password);
  }

  // Check if password contains a directly ascending/descending sequence of number
  if (/01|12|23|34|45|56|67|78|89|98|87|76|65|54|43|32|21|10/.test(password))
    return false;

  /** Check if:
   * password has the appropriate length (10)
   * password includes numbers and letters (uppercase and lowercase)
   * password does not include any special characters
   */
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])[a-zA-Z\d]{10}$/.test(password))
    return false;

  // Check that forbidden passwords are considered wrong
  if (forbiddenPasswords.includes(password)) return false;

  // Check if password has at least 4 different digits/characters
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}

/*********************************************************************************************************************************/
/** TESTS */

// Happy case
console.log(isValidPassword("K71Hnw84aE"));

// Forbidden password
console.log(isValidPassword("mc9Q20pdjH"));

// Password with ascending/descending sequence of numbers
console.log(isValidPassword("A1f3gH7654"));

// Passwords with only lower/upper case characters
console.log(isValidPassword("aj4hw29r73"));
console.log(isValidPassword("KME63J02JT"));

// Too long or short passwords
console.log(isValidPassword("1244352354235235423455Aa"));
console.log(isValidPassword("J8hWf1A"));

// Password with special characters
console.log(isValidPassword("1/ab3@K#MD"));

// Password with less than 4 different digits/characters
console.log(isValidPassword("aaaaBBBB11"));
