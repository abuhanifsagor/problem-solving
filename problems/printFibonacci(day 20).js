/* 
Write a JavaScript function called printFibonacci that prints the Fibonacci sequence up to the N-th number.


input: 5
output: 0 1 1 2 3

input: 8
output: 0 1 1 2 3 5 8 13

input: 10
output: 0 1 1 2 3 5 8 13 21 34

Explanation:
This question asks you to print the Fibonacci sequence up to the N-th number. Each number in the Fibonacci sequence is the sum of the two preceding ones, starting with 0 and 1.

*/

const printFibonacci = (num) => {
    if(typeof num !== "number") return "Invalid Input"

    let arr = [0, 1]

    for (let i = 2; i <= num; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr.slice(0, num).join(" ")
}
console.log(printFibonacci(5));