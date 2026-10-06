// const word = "javascript";
// // output JavaScript
// const result = word.slice(0, 4) + " " + word.slice(4);
// const splitWord = result.split(" ");

// for (let i = 0; i < splitWord.length; i++) {
//   const firstLetterToUppercase = splitWord[i][0].toUpperCase();
//   const firstUppeercase = firstLetterToUppercase + splitWord[i].slice(1);
//   splitWord[i] = firstUppeercase;
// }

// console.log(splitWord.join(" "));

const word = "aabbcc";
let found = null;

// Output: null;

// Output: "c"

// find the first letter that comes one time

let count = {};
for (const char of word) {
  if (count[char]) {
    count[char]++;
  } else {
    count[char] = 1;
  }
}

for (const key in count) {
  if (count[key] === 1) {
    found = key;
    break;
  }
}

// console.log(found);

// 🔥 Problem 2 — Find the Longest Word
// const sentence = "React makes frontend development easier";
// let biggestLength = -Infinity;
// let biggerstWord = "";

// const splitSentence = sentence.split(" ");
// for (let i = 0; i < splitSentence.length; i++) {
//   if (splitSentence[i].length > biggestLength) {
//     biggestLength = splitSentence[i].length;
//     biggerstWord = splitSentence[i];
//   }
// }

// console.log(biggerstWord);

// 🔥 flaten a nested array
// const array = [1, [2, 3], [4, 5]];
// //  → Output: [1, 2, 3, 4, 5]
// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     newArray.push(array[i][j]);
//   }
// }
// console.log(newArray);

// 🔥 make a flatten array to nested array
// Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
// const array = [1, 2, 3, 4, 5];
// const chunk = [];
// const chunkSize = 2;
// let group = [];

// for (let i = 0; i < array.length; i++) {
//   group.push(array[i]);
//   if (group.length === chunkSize) {
//     chunk.push(group);
//     group = [];
//   }
// }
// if (group.length > 0) {
//   chunk.push(group);
// }
// console.log(chunk);
const numbers = [1, 2, 3, 4, 5];
const k = 2;
const last = numbers.slice(numbers.length - k);
const first = numbers.slice(0, numbers.length - k);
const newArray = [...last, ...first];

console.log(newArray);

const user = {
  name: "imran",
  age: 23,
  location: {
    district: "dhaka",
  },
};

const copyUser = structuredClone(user);
copyUser.age = 56;
copyUser.location.district = "chittagong";
console.log(user);

// (function hello() {
//   console.log("hello");
// })();
// console.log("5" + 2);
// const array = [10, 20, 30, 40, 50];
// let firstSmallvalue = array[0]; // 10
// let secondSmallestValue = Infinity; //20

// for (let i = 0; i < array.length; i++) {
//   if (array[i] < firstSmallvalue) {
//     secondSmallestValue = firstSmallvalue;
//     firstSmallvalue = array[i];
//   } else if (array[i] < secondSmallestValue && array[i] !== firstSmallvalue) {
//     secondSmallestValue = array[i];
//   }
// }
// console.log(secondSmallestValue);

// const arr = [10, 20, 30, 40, 50];
// const arr2 = [60, 20, 70, 80, 40];

// for (const el of arr2) {
//   if (!arr.includes(el)) {
//     arr.push(el);
//   }
// }
// console.log(arr);

setInterval(() => {
  console.log("kire beda");
  setInterval(() => {
    console.log("tor name ki");
  }, 1000);
}, 1000);
