// A function that checks if a given number is prime or not

const isPrime = (number) => {
  // Check if number is a real number
  if (typeof number !== "number") return false;

  // Check factor 1: The smallest number that satisfies the definition of prime numbers is 2
  if (number < 2) {
    return false;
  }

  // Check factor2 : The number not be divisible by any other number except 1 and itself
  for (let i = 2; i < Math.ceil(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  // Is a prime number if it checks the previous factors
  return true;
};

// My tests
console.log(isPrime("This is not a number"));
console.log(isPrime(2)); // true
console.log(isPrime(1)); // false
console.log(isPrime(8)); // false
console.log(isPrime(7)); // true
console.log(isPrime(30)); // false
