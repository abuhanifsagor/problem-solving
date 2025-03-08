/*
Write a JavaScript countVowels  function that takes a string as input 
and returns the total number of vowels (both uppercase and lowercase) in the string. 

Input: "Hello World"
Output: 3
*/

const countVowels = (words) =>{
    if(typeof words !== 'string' || words.trim() == "" ){
        return "Please Write someting.."
    }

    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (const letter of words.toLocaleLowerCase()) {
        if(vowels.includes(letter)){
            count++;
        }
    }

    return count;
} 

console.log(countVowels("Hello worlds"));