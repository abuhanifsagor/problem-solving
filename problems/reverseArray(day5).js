/*
Write a JS function reverseArray that takes an array and returns a reverse array.

Example 1:
Input: [ 3, 6, 5, 4, 8]
Output: [ 8, 4, 5, 6, 3 ]

Constraints:
The function cannot change the main array.
Cannot use array methods for reverse.
*/

function reverseArray(array){
     let newAry = [];
    for (let i = array.length - 1;  i >= 0 ; i-- ) {
        newAry.push(array[i]);
    }
    return newAry;
}

const input =reverseArray([ 3, 6, 5, 4, 8]);
console.log(input); // output [8, 4, 5, 6, 3]