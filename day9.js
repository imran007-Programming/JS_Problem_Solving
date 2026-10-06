// const numbers = [0, 1, 0, 3, 12, 0, 5];
// let index = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     numbers[index] = numbers[i];
//     index++;
//   }
// }

// for (let i = index; i < numbers.length; i++) {
//   numbers[i] = 0;
// }
// console.log(numbers);
// const numbers = [3, -1, 5, -7, 2, -4, 8];
// // set the negative large value at the left side//
// let index = 0;
// let j = 0;
// const newArray = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 0) {
//     numbers[index] = numbers[i];
//     index++;
//   } else {
//     newArray.push(numbers[i]);
//   }
// }
// for (let i = index; i < numbers.length; i++) {
//   numbers[i] = newArray[j];
//   j++;
// }

// console.log(numbers);

// //move the even number to the right left side
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     const temp = numbers[i];

//     for (let j = i; j > index; j--) {
//       numbers[j] = numbers[j - 1];
//     }
//     numbers[index] = temp;
//     index++;
//   }
// }
// console.log(numbers);
const numbers = [3, 8, 5, 2, 7, 4, 9, 6];
let index = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    const temp = numbers[i];

    for (let j = i; j > index; j--) {
      numbers[j] = numbers[j - 1];
    }
    numbers[index] = temp;
    index++;
  }
}
console.log(numbers);
