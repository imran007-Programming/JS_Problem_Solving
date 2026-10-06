// //
// const user = {
//   name: "imran",
//   greet: function () {
//     console.log(this.name);
//     const newArrowfun = () => {
//       console.log(this.name);
//     };
//     newArrowfun();
//   },
//   greet1: () => {
//     console.log(this.name);
//   },
// };
// user.greet();
// user.greet1();

// const numbers = [2, 3, 4, 5];

// const res = numbers.filter((num) => {
//   return num > 3;
// });

// console.log(res);

// (() => {
//   console.log("hello world");
// })();

// const counter = (function () {
//   let count = 0;
//   return {
//     increment: function () {
//       count++;
//       return count;
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// })();

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.count);

// const hello = (name) => {
//   return `hello my name is ${name}`;
// };

// const greet = (name, callback) => {
//   return callback(name);
// };

// const res = greet("imran", hello);
// console.log(res);

// const outter = () => {
//   let count = 0;
//   return function inner() {
//     count++;
//     return count;
//   };
// };
// const counter = outter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

const hello = () => {
  return "hello";
};

console.log(hello());
