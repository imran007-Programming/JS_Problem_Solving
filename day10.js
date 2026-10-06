// const numbers = [4, -2, 7, -5, 0, 3, -1];
// let index = 0;
// // expected: [-2, -5, -1, 4, 7, 0, 3]

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 0) {
//     const temp = numbers[i];
//     for (let j = i; j > index; j--) {
//       numbers[j] = numbers[j - 1];
//     }
//     numbers[index] = temp;
//     index++;
//   }
// }
// console.log(numbers);
const numbers = [0, -2, 4, -1, 0, 3, -5];
// expected: [4, 3, 0, 0, -2, -1, -5]
let index = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    const temp = numbers[i];

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
