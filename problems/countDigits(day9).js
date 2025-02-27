/*
Write a javaScript function countDigits  that takes a parameter as an integer and returns  the number of digits in this parameter.

Example 1:
Input: 59863
Output: 5


Constraints: 
You cannot change the type of value. Like, Cannot convert an integer into string.
*/

function countDigits(int) {
    if(int % 1 !== 0){
        return "invalid"
    }
    if(int === 0) {
        return 1;
    }

    let count = 0;
    let num = Math.abs(int);

    for( let i = 0; num > 0 ; i++){
        count ++;
        num = Math.floor(num/10);
    }
    
    return count;
    
}
console.log(countDigits(123456));