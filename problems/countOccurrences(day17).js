/*
Write a JavaScript function called countOccurrences that counts the number of occurrences of a substring within a given string.

Input:
"hello world, hello everyone"
"hello"

Output: 2
*/
const countOccurrences = (str, subStr) => {
  if (subStr === "") return 0;
  return str.split(subStr).length - 1;
};
console.log(countOccurrences("hello world, hello everyone", "hello"));
