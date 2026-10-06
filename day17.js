// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// const numbers = [3, 67, 2, 89, 45, 100, 23];
// //find the max

// let maxNum = numbers[0];
// let secMaxNum = -Infinity;
// let thirdMaxNum = -Infinity;
// for (const num of numbers) {
//   if (num > maxNum) {
//     thirdMaxNum = secMaxNum;
//     secMaxNum = maxNum;
//     maxNum = num;
//   } else if (num > secMaxNum && num !== maxNum) {
//     thirdMaxNum = secMaxNum;
//     secMaxNum = num;
//   } else if (num > thirdMaxNum && num !== maxNum && num !== secMaxNum) {
//     thirdMaxNum = num;
//   }
// }
// console.log(thirdMaxNum);
const str = "javascript is awesome";

let vowel = "aeiou";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (vowel.includes(str[i])) {
    count++;
  }
}
// console.log(count);
const arr = [1, 2, 3, 4, 5];
let newArray = [];
for (const num of arr) {
  newArray.unshift(num);
}
// console.log(newArray);
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
let commonNum = [];
for (const num of arr2) {
  if (arr1.includes(num)) {
    commonNum.push(num);
  }
}

const users = [
  { name: "Imran", age: 25, city: "Dhaka" },
  { name: "Mostary", age: 22, city: "Chittagong" },
  { name: "Rafi", age: 30, city: "Dhaka" },
  { name: "Sadia", age: 19, city: "Sylhet" },
];

function findUser(users) {
  const user = users
    .filter((el) => el.age > 0 && el.city === "Dhaka")
    .map((el) => el.name);

  return user;
}
const res = findUser(users);
console.log(res);

const sentence = "javascript is really fun";

function capitalWord(str) {
  const splitWord = str.split(" ");
  for (let i = 0; i < splitWord.length; i++) {
    const temp = splitWord[i][0].toUpperCase();
    splitWord[i] = temp + splitWord[i].slice(1);
  }

  return splitWord.join(" ");
}
const res1 = capitalWord(sentence);
console.log(res1);
const strr = "Imran hasan";

const newStrr = strr.split(" ");
console.log(newStrr);
