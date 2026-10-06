//  remove dulicate name from an array ///

const nameArray = [
  "rakib",
  "sakib",
  "tanvir",
  "imran",
  "hasan",
  "rakib",
  "shakil",
  "nabil",
  "tanvir",
  "rahim",
  "fahim",
  "sakib",
  "arif",
  "jamil",
  "imran",
  "hasan",
  "shakil",
  "nayeem",
  "rahim",
  "fahim",
  "sohan",
  "rakib",
  "arif",
  "tanvir",
  "jamil",
  "nabil",
  "hasan",
  "imran",
  "shakil",
  "rahim",
  "fahim",
  "sohan",
  "nayeem",
  "rakib",
  "arif",
  "jamil",
  "tanvir",
  "sakib",
  "hasan",
  "nabil",
  "imran",
  "rahim",
  "shakil",
  "fahim",
  "sohan",
  "rakib",
  "nayeem",
  "arif",
  "jamil",
  "tanvir",
  "sakib",
  "hasan",
  "nabil",
  "imran",
  "rahim",
  "shakil",
  "fahim",
  "sohan",
  "rakib",
  "arif",
  "jamil",
  "tanvir",
  "nayeem",
  "sakib",
  "hasan",
  "nabil",
  "imran",
  "rahim",
  "shakil",
  "fahim",
  "sohan",
  "rakib",
  "arif",
  "jamil",
  "tanvir",
  "nayeem",
  "sakib",
  "hasan",
  "nabil",
  "imran",
  "rahim",
  "shakil",
  "fahim",
  "sohan",
  "rakib",
  "arif",
  "jamil",
  "tanvir",
  "nayeem",
  "sakib",
  "hasan",
  "nabil",
  "imran",
  "rahim",
  "shakil",
  "fahim",
  "sohan",
  "rakib",
  "arif",
  "jamil",
];
const newArray = [];
for (const name of nameArray) {
  if (!newArray.includes(name)) {
    newArray.push(name);
  }
}

// console.log(newArray);
// count the number of duplicate name///

const count = {};
for (const name of nameArray) {
  if (count[name]) {
    count[name]++;
  } else {
    count[name] = 1;
  }
}
// console.log(count);

const str = "javascript";
const countstr = {};
for (const char of str) {
  if (countstr[char]) {
    count[char]++;
  } else {
    countstr[char] = 1;
  }
}
console.log(countstr);

// find the largest number of an array

const newNumberArray = [2, 3, 4, 22, 44, 5533, 3];

let largestNumber = newNumberArray[0];
let findtheSecondLargest = -Infinity;
for (let i = 0; i < newNumberArray.length; i++) {
  if (newNumberArray[i] > largestNumber) {
    findtheSecondLargest = largestNumber;
    largestNumber = newNumberArray[i];
  } else if (newNumberArray[i] > findtheSecondLargest) {
    findtheSecondLargest = newNumberArray[i];
  }
}

console.log(largestNumber);
console.log(findtheSecondLargest);
