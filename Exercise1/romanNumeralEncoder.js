const ROMAN_NUMERALS = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

// Encode numbers into Roman numerals
const romanNumeralEncoder = (number) => {
  let encodedNumber = "";

  for (const [symbol, value] of Object.entries(ROMAN_NUMERALS)) {
    while (number >= value) {
      encodedNumber += symbol;
      number -= value;
    }
  }

  return encodedNumber;
};

console.log(romanNumeralEncoder(22));
console.log(romanNumeralEncoder(19));
console.log(romanNumeralEncoder(15));
console.log(romanNumeralEncoder(11));
