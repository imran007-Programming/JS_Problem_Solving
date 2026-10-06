// for (const char of word) {
//   if (count[char]) {
//     count[char]++;
//   } else {
//     count[char] = 1;
//   }
// }

// const repeteWord = [];

// for (const char in count) {
//   if (count[char] > 1) {
//     repeteWord.push(char);
//   }
// }

// console.log(repeteWord);
let position = {};
const word = "programming";
const splitWord = word.split("");
for (let i = 0; i < word.length; i++) {
  const char = word[i];
  position[char] = i;
}
console.log(position["r"]);

function learYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("year is Leapyear");
  } else {
    console.log("year is not Leapyear");
  }
}
learYear(2028);
const numbers = [10, 20, 30, 50];
const n = 50;
const total = (n * (n + 1)) / 2;
console.log(total);
let sum = 0;
for (const num of numbers) {
  sum += num;
}

console.log(sum);
