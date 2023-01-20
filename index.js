"use strict";

// function recursion(num) {
//   if (typeof num !== "number") {
//     throw new TypeError("num must be a number");
//   }
//   if (num > 10000 || num < 0) {
//     throw new RangeError("num must be greater than 0 or equal to 9999");
//   }
//   if (num === 0) {
//     return;
//   }
//   console.log(num);
//   recursion(num - 1);
// }

// const power = (base, exp) => {
//   if (typeof base !== "number" || typeof exp !== "number") {
//     throw new TypeError("arguments must be a number");
//   }
//   if (exp < 0) {
//     throw new RangeError("exponent must be greater or equal to 0");
//   }
//   if (exp === 0) {
//     return 1;
//   }
//   return base * power(base, exp - 1);
// };

// const factorial = (number) => {
//   if (typeof number !== "number") {
//     throw new TypeError("arguments must be a number");
//   }
//   if (number < 0 || number > 20) {
//     throw new RangeError("number must be in range(0, 20)");
//   }
//   if (number === 0) {
//     return 1;
//   }
//   return number * factorial(number - 1);
// };

// console.log(power(2, 2));
// console.log(factorial(20));

/**
 * Draw pairs of brackets
 * @param {number} number
 * @returns {string}
 */
const brackets = (number) => {
  if (typeof number !== "number") {
    throw new TypeError("argument must be a number");
  }
  if (number <= 1) {
    return "()";
  }
  return "(" + brackets(number - 1) + ")";
};

try {
  console.log(brackets(6));
} catch (error) {
  console.log(error);
}

/**
 * Gets greatest common divisor
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const nod = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new TypeError("arguments must be a number");
  }
  if (num1 <= 0 || num2 <= 0) {
    throw new RangeError("arguments must be greater 0");
  }
  if (num1 === num2) {
    return num1;
  }
  return num1 > num2 ? nod(num1 - num2, num2) : nod(num1, num2 - num1);
};

try {
  console.log(nod(105, 252));
} catch (error) {
  console.log(error);
}
