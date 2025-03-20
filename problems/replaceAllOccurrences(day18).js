/*
Write a JavaScript function called replaceAllOccurrences that replaces all occurrences of a character in a given string with a new character.

Input
replaceAllOccurrences("hello world", "o", "0");

Output: "hell0 w0rld"


Explanation:
In the string "hello world", all occurrences of the character "o" are replaced with "0", resulting in "hell0 w0rld".

*/

const replaceAllOccurrences = (str) =>{
    if(typeof str !== 'string' || str.trim() == "" ){
        return "Please Write someting.."
    }
    return str.split("o").join("0");
   
}
