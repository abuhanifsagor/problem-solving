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
