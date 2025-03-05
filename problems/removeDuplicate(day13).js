/*
Write a JavaScript function called removeDuplicate that takes an array as input and removes all duplicate elements while keeping the order of the first occurrences. The function should return a new array containing only unique elements.

Example : 
Input : [1, 3, 3, 3, 1, 5, 6, 7, 8, 1]
Output: [1, 3, 5, 6, 7, 8]
*/

const removeDuplicate = (array) => {
  if (!Array.isArray(array)) {
    return "Invalid Input";
  }
  let newArray = [];
  for (const item of array) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
}
const input = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
console.log(removeDuplicate(input));
