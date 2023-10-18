# Password Validation

Write a function that receives a password and checks if it is a valid one or not.

A password is valid when it satisfies the following criteria

- The password is exactly 10 digits or characters;
- The password is composed by digits and numbers;
- The password does **not** contain special characters like `@`, `/`, `#`, etc;
- The password contain a mix of uppercase and lowercase characters;
- Whenever we have a sequence of numbers, these can not be sequences of directly ascending or descending digits, ex: it would fail for `a12345678A` but not for `a88765432A`;
- it is not a forbidden password (in the passwordValidation.js file we provide an array with the forbidden passwords);
- it consists of at least 4 different digits/characters, e.g. `BBBBcc1111` is not allowed, since it consists of only 3 types of symbols: `B`, `c` and `1`;
