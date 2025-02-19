  <h1 align="center">🚀 JavaScript 30-Day Problem-Solving Challenge</h1>



<h4  align="center" > 🚀 Welcome to My JavaScript roblem-Solving Journey! 🎯 </h4> 


## 📅 Challenge Progress  

| 🔢 Day | 📌 Problem Title     | 📂 Solution File | 📆 Status |
|----|--------------------|-----------------|---|
| ✅ 1️⃣  | Print Numbers from 0 to N | [`print numbers`](problems/day1.js) | Completed 🎯 |
| ✅ 2️⃣  | Count Words in a Sentence | [`countWords`](problems/countWords(day2).js)  | Completed 🎯 |
| ✅ 3️⃣  | Remove Words from a Sentence | [`removeWords`](problems/removeWords.js) | Completed 🎯 |
| ✅ 4️⃣  | Odd Index Array | [`oddIndexOfArray`](problems/manipulationOddIndexArry.js) | Completed 🎯|
| 🔜 5️⃣  | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
 <!--
| 🔜 6️⃣  | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 7️⃣  | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 8️⃣  | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 9️⃣  | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 🔟  | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 1️⃣1️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 1️⃣2️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 1️⃣3️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 1️⃣4️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 1️⃣5️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 1️⃣6️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 1️⃣7️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 1️⃣8️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 1️⃣9️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 2️⃣0️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 2️⃣1️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 2️⃣2️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 2️⃣3️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 2️⃣4️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 2️⃣5️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 2️⃣6️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 2️⃣7️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 2️⃣8️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 2️⃣9️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 3️⃣0️⃣ | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
  -->

 
_(...and more challenges ahead! 💪)_  

---

## 📂 Code Previews

### 📝 Day 1: Print Numbers from 0 to N [`🔗`](problems/day1.js)
**Problem Statement**: Write a JavaScript function `printNumbers(N)` that prints all numbers from **0 to N**.

#### Code :
```javascript
function printNumber(N) {
  if (N >= 0) {
    for (let i = 0; i <= N; i++) {
      console.log(i);
    }
  }
}
printNumber(5);
//output :0 1 2 3 4 5

```
### 📝 Day 2: Word Counter [`🔗`](problems/countWords(day2).js)
**Problem Statement**: Write a JavaScript function `countWords()`  that takes a string and returns the number of words contained in this string .
#### Code :
```javascript
function countWords(sentence) {
  let words = 0;
  let isWord = false;

  for (const char of sentence) {

    if (char != " ") {
      if (!isWord) {
        words++;
        isWord = true;
      }
    } else {
      isWord = false;
    }
  }
  return words;
}
const output = countWords("DEV ZeroOne is a Next-Gen Programming Learning Platform.");
const output2 = countWords("       ");
console.log(output,output2);
//output 8 0
```

### 📝 Day 3: Remove Words [`🔗`](problems/removeWords.js)
**Problem Statement**: Write a JavaScript function `removeWords()` that takes a string and returns the string without the first three words.
- If the input is null, undefined, or the empty string, it returns "Invalid input".
-  If the string length is three or less, it returns "String too short to remove".
- Do not use any built-in string methods such as .slice() or .substring().
#### Code :
```javascript
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


 
```
### 📝 Day 4: Odd Indexed Elements [`🔗`](problems/manipulationOddIndexArry.js)
**Problem Statement**: Write a JavaScript function that takes an array and returns a new array containing all the odd indexed elements from the original array. The function should handle the following cases.
- If the input array is empty or not an array, it returns "Invalid Array".
- If the input array contains non-numeric elements, it returns "Invalid Array".
- If the length of the original array is less than 3, the function adds "DEVZEROONE" to the beginning and if the length of the original array more than 3, the function adds "DEVZEROONE" to the end.
- We consider a 0-indexed position as an odd number.
#### Code :
```javascript
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

```


### 📝 Day 5: [Coming Soon...] [`🔗`](#)
**Problem Statement**: [`emty 🕳️`]
#### Code :
```javascript
console.log('output is on the way ')

```
<!--  
### 📝 Day 6: [Coming Soon...] [`🔗`](#)
**Problem Statement**: [`emty 🕳️`]
#### Code :
```javascript 
console.log('output is on the way ')

```

 ### 📝 Day 7: [Coming Soon...] [`🔗`](#) 
 **Problem Statement**: 

 #### Code: 
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 8: [Coming Soon...] [`🔗`](#) 
**Problem Statement**: 
#### Code: 
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 9: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 10: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 11: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 12: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 13: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 14: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 15: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 16: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 17: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 18: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 19: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 20: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 21: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 22: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 23: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 24: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 25: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 26: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 27: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 28: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 29: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 30: [Coming Soon...] [`🔗`](#) **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
-->
### ✨ That's all for now!

*Thanks for checking out my work. Feel free to reach out if you have any questions or suggestions!*
