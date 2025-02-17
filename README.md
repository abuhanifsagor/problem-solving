# 🚀 JavaScript 30-Day Problem-Solving Challenge  

Welcome to my **Problem Solving** repository! This is my **30-day JavaScript challenge**, where I solve a new coding problem every day.  

## 📌 About This Repository  
This repository is dedicated to improving my problem-solving skills by solving one JavaScript problem every day. Each day's solution is added as a separate file with a description of the problem in this README.  

---

## 📅 Daily Challenges  

### ✅ Day 1: **Print Numbers from 0 to N**  
**Problem:**  
Write a JavaScript function `printNumbers(N)` that prints all numbers from **0 to N**.  

**Solution (JavaScript):**  
```js
function printNumber(N) {
  if (N >= 0) {
    for (let i = 0; i <= N; i++) {
      console.log(i);
    }
  }
}

printNumber(5);
//output :0 1 2 3 4 5

