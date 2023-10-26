// A function that checks if a given number is prime or not

const isPrime = (inputNumber) => {
  if (typeof inputNumber !== "number" || inputNumber < 2) return false;

  for (let i = 2; i < inputNumber; i++) {
    if (inputNumber % i === 0) return false;
  }

  return true;
};

// My tests
console.log(isPrime("This is not a number"));
console.log(isPrime(2)); // true
console.log(isPrime(1)); // false
console.log(isPrime(8)); // false
console.log(isPrime(4)); // false
console.log(isPrime(7)); // true
console.log(isPrime(30)); // false
