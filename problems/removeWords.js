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

