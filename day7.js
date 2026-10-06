//

// const word = "programming";

//find the most repetative word//
// const count = {};
// for (const char of word) {
//   if (count[char]) {
//     count[char]++;
//   } else {
//     count[char] = 1;
//   }
// }
// let maxCount = 0;
// let mostRepeated = "";

// for (const char in count) {
//   if (count[char] > maxCount) {
//     maxCount = count[char];
//     mostRepeated = char;
//   }
// }
// console.log(maxCount);
// console.log(mostRepeated);

// const word = "aabbbccddeeee";
// const count = {};

// for (const char of word) {
//   if (count[char]) {
//     count[char]++;
//   } else {
//     count[char] = 1;
//   }
// }
// let minCount = 2;
// let lesRepeate = [];
// for (const char in count) {
//   if (count[char] === minCount) {
//     lesRepeate.push(char);
//   }
// }
// console.log(minCount);
// console.log(lesRepeate);

// const numbers = [1, 2, 33, 44, 55, 123, 44, 55];
// let largest = numbers[0];
// let secondLargest = -Infinity;

// for (const num of numbers) {
//   if (num > largest) {
//     secondLargest = largest;
//     largest = num;
//   } else if (num > secondLargest && num !== largest) {
//     secondLargest = num;
//   }
// }
// console.log(largest);
// console.log(secondLargest);

// const numArray = [1, 2, 4, 5, 6, 3];

// const target = 9;
// for (let i = 0; i < numArray.length; i++) {
//   for (let j = i + 1; j < numArray.length; j++) {
//     if (numArray[i] + numArray[j] === target) {
//       console.log("number:", numArray[i], numArray[j]);
//       console.log("index:", i, j);
//     }
//   }
// }
