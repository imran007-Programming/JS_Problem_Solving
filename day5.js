// const wordPairs = [
//   ["listen", "silent"],
//   ["evil", "vile"],
//   ["race", "care"],
//   ["hello", "world"],
//   ["rat", "car"],
//   ["dusty", "study"],
// ];
// for (let i = 0; i < wordPairs.length; i++) {
//   const firstSplitWord = wordPairs[i][0].split("");
//   const secondSplitWord = wordPairs[i][1].split("");
//   for (let i = 0; i < firstSplitWord.length; i++) {
//     for (let j = i + 1; j < firstSplitWord.length; j++) {
//       if (firstSplitWord[i] > firstSplitWord[j]) {
//         const temp = firstSplitWord[i];
//         firstSplitWord[i] = firstSplitWord[j];
//         firstSplitWord[j] = temp;
//       }
//     }
//   }
//   for (let i = 0; i < secondSplitWord.length; i++) {
//     for (let j = i + 1; j < secondSplitWord.length; j++) {
//       if (secondSplitWord[i] > secondSplitWord[j]) {
//         const temp = secondSplitWord[i];
//         secondSplitWord[i] = secondSplitWord[j];
//         secondSplitWord[j] = temp;
//       }
//     }
//   }
//   const joinFirstWord = firstSplitWord.join("");
//   const joinSecondtWord = secondSplitWord.join("");
//   if (joinFirstWord === joinSecondtWord) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
const str = "javascript";
const spitIt = str.split("");
[j, a, v, s];
for (let i = 0; i < spitIt.length; i++) {
  for (let j = i + 1; j < spitIt.length; j++) {
    if (spitIt[i] > spitIt[j]) {
      const temp = spitIt[i];
      j;
      spitIt[i] = spitIt[j];
      a;
      spitIt[j] = temp;
      j;
      (a, j);
    }
  }
}
console.log(spitIt.join(">"));

const numArray = [3, 2, 5, 5, 6, 1, 3];
const dulicate = [];
for (let i = 0; i < numArray.length; i++) {
  for (let j = i + 1; j < numArray.length; j++) {
    if (numArray[i] > numArray[j]) {
      const tempNumber = numArray[i];
      numArray[i] = numArray[j];
      numArray[j] = tempNumber;
    }
  }
}

for (const num of numArray) {
  if (!dulicate.includes(num)) {
    dulicate.push(num);
  }
}
console.log(dulicate);

const name = [3, 2, 4, 5];
const reverseArray = [];
for (let i = name.length - 1; i >= 0; i--) {
  reverseArray.push(name[i]);
}
console.log(reverseArray);
