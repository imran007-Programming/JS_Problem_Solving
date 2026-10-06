const array = ["x", "x", "x", "y", "y", "z", "c", "d"];

const count = {};

for (const char of array) {
  if (count[char]) {
    count[char]++;
  } else {
    count[char] = 1;
  }
}

console.log(count);

const wordPairs = [
  ["listen", "silent"],
  ["evil", "vile"],
  ["race", "care"],
  ["hello", "world"],
  ["rat", "car"],
  ["dusty", "study"],
];
const checkAnagram = (word) => {
  for (let i = 0; i < word.length; i++) {
    const firstSplitword = word[i][0].split("");
    const secondSplitWord = word[i][1].split("");
    for (let i = 0; i < firstSplitword.length; i++) {
      for (let j = i + 1; j < firstSplitword.length; j++) {
        if (firstSplitword[i] > firstSplitword[j]) {
          const temp = firstSplitword[i];
          firstSplitword[i] = firstSplitword[j];
          firstSplitword[j] = temp;
        }
      }
      for (let j = i + 1; j < secondSplitWord.length; j++) {
        if (secondSplitWord[i] > secondSplitWord[j]) {
          const temp = secondSplitWord[i];
          secondSplitWord[i] = secondSplitWord[j];
          secondSplitWord[j] = temp;
        }
      }
    }

    if (firstSplitword.join("") === secondSplitWord.join("")) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
};
checkAnagram(wordPairs);

const Numarray = [1, 2, 3, 2, 4, 5, 1];
const dulicate = [];
const dulicateNumber = [];
for (const num of Numarray) {
  if (!dulicate.includes(num)) {
    dulicate.push(num);
  } else {
    dulicateNumber.push(num);
  }
}
console.log(dulicateNumber);

const numArray = [1, 2, 3, 4, 5, 6];
const reverseNumber = [];
for (let i = 0; i < numArray.length; i++) {
  reverseNumber.unshift(numArray[i]);
}
console.log(reverseNumber);

const number = [10, 30, 40];
const newNum = number.shift();
console.log(number);

const text = "javascript";
let strVowel = "";
for (let i = 0; i < text.length; i++) {
  if (
    text[i] === "a" ||
    text[i] === "e" ||
    text[i] === "i" ||
    text[i] === "o" ||
    text[i] === "u"
  ) {
    strVowel += text[i];
  }
}

console.log(strVowel.length);
