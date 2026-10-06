// const arr = [5, 3, 4, 3, 2, 5, 1];
// // find the fist duplicate number
// const count = {};
// for (let i = 0; i < arr.length; i++) {
//   if (count[arr[i]]) {
//     console.log(arr[i]);
//     break;
//   } else {
//     count[arr[i]] = 1;
//   }
// }
// const arr = [0, 4, 0, 2, 12, 0, 5];

// let index = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     const temp = arr[i];
//     for (let j = i; j > index; j--) {
//       arr[j] = arr[j - 1];
//     }
//     arr[index] = temp;
//     index++;
//   }
// }
// console.log(index);

// for (let i = index; i < arr.length; i++) {
//   arr[i] = 0;
// }
// console.log(arr);

// const arr = [100, 4, 200, 1, 3, 2];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       const temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// // [1,2,3,4]
// let count = 1; //1
// for (let i = 0; i < arr.length; i++) {
//   if (arr.includes(arr[i] + 1)) {
//     count++;
//     console.log(arr[i]);
//   }
// }
// //
// let x = 10;
// if (function solve() {}) {
//   x = x + typeof solve;
// }

// console.log(x);

// let x = [100, 200, 300];
// let y = [100, 200, 300];
// let z = y;
// console.log(x == y); //false

// console.log(z == y); //true
// console.log(z == x); //false

// console.log(typeof undefined);

// function abc(str) {
//   let lowerStr = "";
//   const array = str.split(" ");
//   let minimum = Infinity; //1
//   for (const char of array) {
//     if (char.length < minimum) {
//       minimum = char.length;
//       lowerStr = char;
//     }
//   }
//   return lowerStr;
// }

// console.log(abc("I am imran hasan"));

const array = [1, 2, 3, 3, 4, 5, 5, 5];
let count = {};

for (let num of array) {
  if (count[num]) {
    count[num]++;
  } else {
    count[num] = 1;
  }
}

console.log(count);
let duplicate = [];
for (let key in count) {
  if (count[key] > 1) {
    duplicate.push(Number(key));
  }
}
console.log(duplicate);

const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7, 8];
let res = [];
for (const num of b) {
  if (a.includes(num)) {
    res.push(num);
  }
}
console.log(res);
