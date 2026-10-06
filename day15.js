// let maxValue = 1;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] * arr[j] > maxValue) {
//       maxValue = arr[i] * arr[j];
//     }
//   }
// }

// arr = [];
// console.log(arr);
// let arr = [1, 2, 3, 4, 5, 6];

// const [first, ...rest] = arr;
// console.log(rest);
// const obj = { name: "imran" };
// const obj2 = obj;
// obj2.name = "hasan";
// console.log(obj, obj2);

const arr = [1, 2, 3, 4, 4, "imran", "hasan", "h", "a"];
let number = [];
let char = [];
let string = [];

for (const el of arr) {
  if (typeof el === "number") {
    number.push(el);
  }
  if (typeof el === "string" && el.length > 1) {
    string.push(el);
  }
  if (typeof el === "string" && el.length === 1) {
    char.push(el);
  }
}

console.log(number, char, string);
