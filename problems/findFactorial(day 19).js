/*
Write a JavaScript function called findFactorial that calculates the factorial of a given number

input: 5
output: 120

input: 3
output: 6

input: 7
output: 5040

*/

const findFactorial = (num) => {
    if(typeof num !== "number"){
        return "Invalid Input"
    }
    let result = 1;
    for (let n = num; n > 0; n--) {
        result = result * n
    }
    return result
}
console.log(findFactorial(0));
console.log(findFactorial(5));
console.log(findFactorial(3));
console.log(findFactorial(7));