/*
Problem Statement:  Write a JavaScript function removeWords  that takes a string as input and returns the remaining
                    string after removing the first three characters.

      1) If the input is null, undefined, or the empty string, it returns "Invalid input".
      2) If the string length is three or less, it returns "String too short to remove".
      3) Do not use any built-in string methods such as .slice() or .substring().

    Input: "Dev Zero One"
    Output: " Zero One"

    Input: "I love programming"
    Output: "ove programming"

    Input: "Hello World"
    Output: "lo World"

    Input: "JS Rocks!"
    Output: "Rocks!"

    Input: "Yes"
    Output: "String is too short to remove"

    Input: ""
    Output: "Input is Invalid"

*/

function removeWords(sentence) {
 
if( sentence === null ||
        sentence === undefined || 
        sentence === ""){
        return "Invalid Input "
    }

    if(typeof sentence !== 'string'){
            return "Invalid Input"    
    }  

let removeWord =''
let isWhiteSpaces = true;

  for (const word  of sentence) {
        if(word !== " "){
            isWhiteSpaces = false;
            break;
        }

        if(isWhiteSpaces){
            return "Invalid Input";
        }
    }

 if(sentence.length <= 3){
        return " String is too short to remove";
    }
    
    for(let i = 3; i < sentence.length; i++){

        removeWord = removeWord + sentence[i];

  }
    return removeWord;
}

console.log(removeWords("Dev Zero One")); // Zero One
console.log(removeWords("I love programming"));// ove programming
console.log(removeWords("yes"));// String is too Short to remove
console.log(removeWords(""));// Invalid Input
console.log(removeWords(555));// Invalid Input
console.log(removeWords(null));// Invalid Input

