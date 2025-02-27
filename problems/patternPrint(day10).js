/*
Write a javascript function patternPrint that takes an integer and make a pattern for this number.

Example 1:
Input: 5
Output: 
5
55
555
5555
55555
5555
555
55
5

Example 1:
Input: 3
Output: 
3
33
333
33
3

Constraints: 
Input  is not greater than or equal 10.
*/
function patternPrint(intr){
    if (intr >= 10) {
        return "Invalid"
    }
    let result = "";
    for(let i = 1; i <= intr; i++){
        result += intr.toString().repeat(i) + "\n";
    }

    for(let i = intr - 1; i >= 0; i--){
        result += intr.toString().repeat(i) + "\n";
        
    }
    return result;
}

console.log(patternPrint(5));
console.log(patternPrint(3));

