# 🚀 JavaScript 30-Day Problem-Solving Challenge  

🚀 Welcome to My JavaScript 30-Day Problem-Solving Journey! 🎯  
---
## 📅 Challenge Progress  

| 🔢 Day | 📌 Problem Title     | 📂 Solution File | 📆 Status |
|------------------------|-----------------------------------------|---------------------------------------|----------------------------|
| ✅ 1️⃣  | Print Numbers from 0 to N | [`print numbers`](day1.js) | Completed 🎯 |
| ✅ 2️⃣  | Count Words in a Sentence | [`countWords`](countWords(day2).js) | Completed 🎯 |
| 🔜 3️⃣  | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
 <!--
| 🔜 4️⃣  | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
| 🔜 5️⃣  | [Coming Soon...] | [`Empty 🕳️`](#) | Pending ⏳ |
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

### 📝 Day 1: Print Numbers from 0 to N
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
### 📝 Day 2: Word Counter
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

### 📝 Day 3: [Coming Soon...]
**Problem Statement**: [`emty 🕳️`]
#### Code :
```javascript
console.log('output is on the way ')

```
<!--  
### 📝 Day 4: [Coming Soon...]
**Problem Statement**: [`emty 🕳️`]
#### Code :
```javascript
console.log('output is on the way ')

```

### 📝 Day 5: [Coming Soon...]
**Problem Statement**: [`emty 🕳️`]
#### Code :
```javascript
console.log('output is on the way ')

```

### 📝 Day 6: [Coming Soon...]
**Problem Statement**: [`emty 🕳️`]
#### Code :
```javascript 
console.log('output is on the way ')

```

 ### 📝 Day 7: [Coming Soon...] 
 **Problem Statement**: 

 #### Code: 
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 8: [Coming Soon...] 
**Problem Statement**: 
#### Code: 
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 9: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 10: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 11: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 12: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 13: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 14: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 15: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 16: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 17: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 18: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 19: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 20: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 21: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 22: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 23: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 24: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 25: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 26: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 27: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 28: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 29: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
### 📝 Day 30: [Coming Soon...] **Problem Statement**: 
#### Code:  
```javascript  
console.log('output is on the way ')
``` 
-->
### ✨ That's all for now!

*Thanks for checking out my work. Feel free to reach out if you have any questions or suggestions!*
