/*
Write a JavaScript function calculateAverage  that takes an array of numbers and returns the average of the array.

Input: [12, 34, 56, 78, 90]
Output: 54

Input: [3, 6, 9, 12, 15, 18] 
Output: 10.5
*/

const calculateAverage = (array) => {
  if (Array.isArray(array) && array.length > 0) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== "number") {
        return "Only numbers";
      }
      total += array[i];
    }
    return total / array.length;
  } else {
    return "Invalid";
  }
};
console.log(calculateAverage([3, 6, 9, 12, 15, 18]));
