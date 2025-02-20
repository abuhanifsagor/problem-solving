/*
Problem Statement: Write a JavaScript function countWords  that takes a string and returns the number of words contained in this string. 

Example:
Input: "DEV ZeroOne is a Next-Gen Programming Learning Platform."
Output: 8

Constraints:
using built-in functions is prohibited

*/
function countWords(sentence) {
  let words = 0;
  let isWord = false;

  for (const char of sentence) {
   
    if (char != " ") {
      if (!isWord) {
        words++;
        isWord = true;
      }
    } else {
      isWord = false;
    }
  }
  return words;
}

const output = countWords("DEV ZeroOne is a Next-Gen Programming Learning Platform.");
const output2 = countWords("       ");
console.log(output,output2); 
