// const array = [15, 10, 11, 8];
// const target = 25;

// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] + array[j] === target) {
//       console.log(i, j);
//     }
//   }
// }
// //
// const str1 = "hellow";
// const str2 = "1234";
// let newStr = "";
// for (let i = 0; i < str1.length; i++) {
//   newStr += str1[i] + str2[i];
// }
// console.log(newStr);
// const array = [1, 2, 3, 4];
// const res = array.slice(0, 3);
// console.log(res);
// const arr = [
//   [2, 3],
//   [3, 4, 3],
//   [5, 6],
// ];
// //output=[1,2,3,4,5,6]
// let newArray = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     newArray.push(arr[i][j]);
//   }
// }
// console.log(newArray);
// const str = "hello";
// const SplitWord = str.split("");

// for (let i = 0; i < SplitWord.length; i++) {
//   for (let j = i + 1; j < SplitWord.length; j++) {
//     if (SplitWord[i] > SplitWord[j]) {
//       const temp = SplitWord[i];
//       SplitWord[i] = SplitWord[j];
//       SplitWord[j] = temp;
//     }
//   }
// }
// console.log(SplitWord.join(""));
const numbers = [4, -2, 7, -5, 0, 3, -1];
let index = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    const temp = numbers[i]; //-2
    for (let j = i; j > index; j--) {
      numbers[j] = numbers[j - 1];
    }
    numbers[index] = temp;
    index++;
  }
}

for (let i = index; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    const temp = numbers[i];
    for (let j = i; j > index; j--) {
      numbers[j] = numbers[j - 1];
    }
    numbers[index] = temp;
    index++;
  }
}

console.log(numbers);
