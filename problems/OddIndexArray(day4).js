/*
Problem Statement: Write a function that takes an array and returns a new array containing
 all the odd indexed elements from this array.
 
If the new  array length is less than 3. Then add a new element “DEVZEROONE” at the last position of this new array.
If the new  array length is greater than 3. Then add a new element “DEVZEROONE” at the first position of this new array.
In this problem. We will consider 0 indexed  as an odd number.

Example 1:
Input: [ 3, 6, 5, 4, 8, 10 ]
Output: [ “DEVZEROONE”, 3, 6, 4, 10 ]

Example 2:
Input: [ 0, 2, 4, 7, 9 ]
Output: [ 0, 2, 7 ]

Example 3:
Input: [1, 2, 3]
Output:[1, 2, "DEVZEROONE"]

Constraints:
Array length cannot be negative or zero.

*/

function oddIndexOfArray(arrays){

    if(arrays.length === 0 || 
        !Array.isArray(arrays)){
        return "Invalid Array"
    }

    for (const number of arrays) {
        if(typeof number !== 'number'){
            return "Invalid Array "
        }
       
    }

    let newArray = []
    newArray.push(arrays[0]);

    for( let i = 0; i < arrays.length ; i++ ){
        i % 2 !== 0 ? newArray.push(arrays[i]) : null;
    }
    newArray.length < 3 ? newArray.push("DEVZEROONE") : newArray.unshift("DEVZEROONE");

 return newArray;
}

const num = [ 12, 15, 8];
const num2 = [12, 15, 8, 65, 20, 111];

console.log(oddIndexOfArray(num)); // [ 12, 15, 'DEVZEROONE' ]

console.log(oddIndexOfArray(num2));//[ 'DEVZEROONE', 12, 15, 65, 111 ]