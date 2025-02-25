/*
Write a function findIndex that takes an array of strings and a string as arguments. and return the index number of this string.
If cannot find the string return -1.

Example 1:
Input: [ "hello", "blue", "green" ] , "blue"
Output: 1

Example 2:
Input: [ "hello", "blue", "green" ] , "red"
Output: -1


Constraints:
Array length cannot be zero or negative.
*/

function findIndex(array, str){
   if(!Array.isArray(array) || array.length <= 0){
    return "Invalid Input"
   }
    for (let i = 0; i < array.length; i++) {
        
        if(array[i] === str){
            return i;
        }
        
    }

    return -1;
} 
console.log(findIndex([ "aa", "0", "blue" ] , "blue"));
console.log(findIndex([ "hello", "ss", "green" ] , "red"));
console.log(findIndex([ ] , "red"));
console.log(findIndex());
