// const array = [12, 5, 1, 8, 3, 10, 6, 2, 9, 4, 7];

// // find the missing number//

// const n = 12;
// const total = (n * (n + 1)) / 2;
// let sum = 0;
// for (const num of array) {
//   sum += num;
// }
// const missingNumber = total - sum;
// console.log(missingNumber);

// const array = [4, 7, 2, 9, 4, 5, 7, 1, 8];
// // find the duplicate number//
// const duplicate = [];
// for (const num of array) {
//   if (!duplicate.includes(num)) {
//     duplicate.push(num);
//   } else {
//     console.log(num);
//   }
// }
// const array2 = [4, 7, 2, 4, 9, 7, 2, 5, 9, 8];

// const count = {};
// const firstDuplicate = [];

// for (const num of array2) {
//   if (count[num]) {
//     console.log(num);
//     break;
//   } else {
//     count[num] = 1;
//     console.log(num);
//   }
// }
// const numbers = [12, 5, 87, 34, 21, 99, 43, 10, 8];
// count even and odd
// for (const num of numbers) {
//   if (num % 2 === 0) {
//     console.log("EVEN:", { num });
//   } else {
//     console.log("ODD", { num });
//   }
// }
// const numbers = [2, 5, 3, 2, 8, 5, 9, 3, 1];
// // find the dulicate number

// const duplicate = [];

// for (const num of numbers) {
//   if (!duplicate.includes(num)) {
//     duplicate.push(num);
//   } else {
//     console.log(num);
//   }
// }
// const numbers = [1, 2, 3, 4, 5];
// // reverse array
// // const reverse = [];
// for (let i = numbers.length - 1; (i = 0); i--) {
//   reverse.push(numbers[i]);
// }
// console.log(reverse);
// for (let i = 0; i < numbers.length; i++) {
//   reverse.unshift(numbers[i]);
// }
// console.log(reverse);

const nameArray = ["RAKIB", "SAKIB", "TAKIB", "JHON"];
const reverse = [];
for (let i = nameArray.length - 1; i >= 0; i--) {
  reverse.push(nameArray[i]);
}
console.log(reverse);
