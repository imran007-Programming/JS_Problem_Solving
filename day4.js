// // const array = [2, 4, 5, 7, 6];
// // // taget 6 and add 2 numbers and get the target and find the index of that 2 number.

// // let target = 9;
// // for (let i = 0; i < array.length; i++) {
// //   for (let j = i + 1; j < array.length; j++) {
// //     if (array[i] + array[j] === target) {
// //     }
// //   }
// // }
// // reverse a string
// const str = "hello";
// let reverse = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reverse += str[i];
// }
// console.log(reverse);

// const array = [2, 3, 6, 1, 8, 22, 44];
// let target = 14;
// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] + array[j] === target) {
//       console.log(i, j);
//       console.log(array[i], +array[j]);
//     }
//   }
// }
//check the palindrom

const words = [
  "madam",
  "hello",
  "racecar",
  "javascript",
  "level",
  "banana",
  "noon",
  "coding",
  "civic",
  "world",
];
// separate the palindrom and not palindrom

const palindrome = [];
const notPalindrome = [];
for (let i = 0; i < words.length; i++) {
  let reverse = "";
  for (let j = words[i].length - 1; j >= 0; j--) {
    reverse += words[i][j];
  }
  if (reverse === words[i]) {
    palindrome.push(words[i]);
  } else {
    notPalindrome.push(words[i]);
  }
}
console.log("palindrome", palindrome);
console.log("notPalindrome", notPalindrome);

const numArray = [2, 3, 5, 6];
let target = 8;

for (let i = 0; i < numArray.length; i++) {
  for (let j = i + 1; j >= 0; j++) {
    if (numArray[i] + numArray[j] === target) {
      console.log("indexPosition:", i, j);
    }
  }
}
