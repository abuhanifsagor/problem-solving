/*
problem: Write a JavaScript function filterIntegers  that takes an array that contains string and integer elements, and returns a new array with only integer elements.

Example 1:
Input: [ 3, 6, “hello”, 4, “3”,  8]
Output: [ 3, 6,  4,  8]

Constraints:
Array length cannot be zero or negative.

*/

function filterIntegers(input){
    let results = [];
    let isNumber = false;
    if(!Array.isArray(input) || 
        input.length === 0 ){
        return "invalid Input"
    }
    for (const number of input) {
        if(typeof number === 'number' && 
            number % 1 === 0 && 
            number > 0){
            results.push(number);
            isNumber = true;
        }
    }

    if(isNumber){
        return results ;
    }else{
        return "invalid input"
    }
}
const input = [15,11, 20, "55"," "];
const results = filterIntegers(input);
 console.log(results);  // output = [15,11,20]