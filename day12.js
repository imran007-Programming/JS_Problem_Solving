// swap 2 varibales
// const swapVariables = (a, b) => {
//   [a, b] = [b, a];
//   console.log(a, b);
// };

// swapVariables(10, 12);
// convert celcius to Fahrenheit with write a function///

// const converCelsiusToFahrenheit = (celcius) => {
//   console.log((fahrenheit = (celcius * 9) / 5 + 32));
// };
// converCelsiusToFahrenheit(10);
// REVERSE a string with alphabetically ordered
// const str = "hello";

// const splitStr = str.split("");
// for (let i = 0; i < splitStr.length; i++) {
//   for (let j = i + 1; j < splitStr.length; j++) {
//     if (splitStr[i] > splitStr[j]) {
//       const temp = splitStr[i];
//       splitStr[i] = splitStr[j];
//       splitStr[j] = temp;
//     }
//   }
// }
// const reverse = splitStr.join("");
// console.log(reverse);

// const str = "dlrow";
// // reverse it
// let reverse = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reverse += str[i];
// }
// console.log(reverse);

// count vowel
// const countVowel = (str) => {
//   let vowel = "aeiou";
//   let count = 0;
//   for (const char of str) {
//     if (vowel.includes(char)) {
//       count++;
//     }
//   }
//   console.log(count);
// };

// countVowel("hello");
// const newArray = [];
// const array = [1, [2, 3], [4, 5]];
// // flat the nested array//
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     newArray.push(array[i][j]);
//   }
// }

/// chunk an array
const array = [1, 2, 3, 4, 5, 6, 7];

const chunk = [];
let group = [];
const chunkSize = 4;
for (const element of array) {
  group.push(element);

  if (group.length === chunkSize) {
    chunk.push(group);
    group = [];
  }
}
if (group.length > 0) {
  chunk.push(group);
}
console.log(chunk);
