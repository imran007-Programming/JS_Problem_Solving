const word = "javascript";
// remove the vowel
let consonent = "";
let vowel = "aeiou";
for (let i = 0; i < word.length; i++) {
  if (!vowel.includes(word[i])) {
    consonent += word[i];
  }
}

// console.log(consonent);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// expected: [2, 4, 6, 8]
// let evenArray = [];
// for (const num of numbers) {
//   if (num % 2 === 0) {
//     evenArray.push(num);
//   }
// }
// console.log(evenArray);

const sentence = "hello world from javascript";
const splitSentence = sentence.split(" ");

for (let i = 0; i < splitSentence.length; i++) {
  const temp = splitSentence[i][0].toUpperCase();
  splitSentence[i] = temp + splitSentence[i].slice(1);
}
console.log(splitSentence.join(" "));
