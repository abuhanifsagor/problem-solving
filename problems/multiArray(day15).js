/*
Write a JavaScript function multiArray that takes 
two non-empty arrays of numbers as input and 
returns a new array where each element is the product
 of the corresponding elements from the input arrays.

Input: [1, 2, 3], [1, 2, 3]
Output: [1, 4, 9]

Input: [2, 3, 1], [4, 5, 6]
Output: [8, 15, 6]

Input: [], [1, 2, 3]
Output: "Invalid"
*/

const multiArray = (a, b) => {
  if (
    !Array.isArray(a) ||
    !Array.isArray(b) ||
    a.length == 0 ||
    b.length == 0
  ) {
    return "Invalid Input";
  }
  if (a.length !== b.length) {
    return "Arrays must be of the same length";
  }
  if (
    !a.every((num) => typeof num === "number") ||
    !b.every((num) => typeof num === "number")
  ) {
    return "Arrays must contain only numbers";
  }
  let newArray = [];
  for (let i = 0; i < a.length; i++) {
    newArray.push(a[i] * b[i]);
  }
  return newArray;
};
console.log(multiArray([2, 5, 5], [4, 3, 6]));
