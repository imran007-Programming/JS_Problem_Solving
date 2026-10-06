// // const numbers = [12, 5, 89, 23, 45, 3, 67];
// // // find the largest number from array.dont use any built in method like Math.max()

// // let largest = numbers[0];
// // for (i = 0; i < numbers.length; i++) {
// //   if (numbers[i] > largest) {
// //     largest = numbers[i];
// //   }
// // }

// // console.log(largest);

// // explaination:First i assume that the lasgest number is the first elment of the numbers array.then do a for loop then compare with that first element that the number is larger than the new largest array elemnet if it is then keep the value on that largest variable and return

// // Problem 2
// const numbers = [12, 5, 89, 23, 89, 67, 67];
// // find the dulicate numbers from array and dont use any built in method// like Set

// // let duplicate = [];
// //Approach 1:
// // for (i = 0; i < numbers.length; i++) {
// //   let isExsist = false;
// //   for (j = 0; j < duplicate.length; j++) {
// //     if (duplicate[j] === numbers[i]) {
// //       isExsist = true;
// //       break;
// //     }
// //   }
// //   if (!isExsist) {
// //     duplicate.push(numbers[i]);
// //   }
// // }
// // Explaination: first take an empty array with variable name duplicate array and also take another variable isExsist value is flase. then do the for loop in the numbers array and check the array numbers is exsist or not in the dulicate array.if exsist then isexsist varibale will be true and then break.if isExsist is false then push the numbers on the dulicate array.

// // Approach-2:
// // for (const num of numbers) {
// //   if (!duplicate.includes(num)) {
// //     duplicate.push(num);
// //   }
// // }

// // console.log(duplicate);

// // explaination: first take an empty array with variable name duploicate. then do for...of in the numbers array and check the numbers is not include on the duplicate array.if it is not included then push the numbers on that duplicate array.

// Problem: 3;

// // found the word frequency

// const city = "NEYYORK";

// const result = {};

// for (const char of city) {
//   if (result[char]) {
//     result[char]++;
//   } else {
//     result[char] = 1;
//   }
// }
// console.log(result);

// // found the number frequency

// const duplicateArray = [1, 2, 3, 4, 5, 33, 44, 33, 22, 1, 2, 4];

// const newObject = {};

// for (const num of duplicateArray) {
//   if (newObject[num]) {
//     newObject[num]++;
//   } else {
//     newObject[num] = 1;
//   }
// }
// console.log(newObject);

// const bigarray = [1, 22, 3, 22, 34, 123, 112, 34, 554, 66, 754];

// // find the dulicate number

// let count = {};
// for (let i = 0; i < bigarray.length; i++) {
//   if (count[bigarray[i]]) {
//     count[bigarray[i]]++;
//   } else {
//     count[[bigarray[i]]] = 1;
//   }
// }
// console.log(count);

const language = "javascript";

let object = {};

for (const char of language) {
  if (object[char]) {
    object[char]++;
  } else {
    object[char] = 1;
  }
}
// console.log(object);

const dulicateArray = [2, 3, 4, 6, 33, 22, 44, 33];

let newArray = [];
2;
let isDuplicate = false;
for (let i = 0; i < dulicateArray.length; i++) {
  //   console.log(i);
  for (let j = 0; j < newArray.length; j++) {
    if (newArray[j] === dulicateArray[i]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    newArray.push(dulicateArray[i]);
  }
}

console.log(newArray, "my name is");
