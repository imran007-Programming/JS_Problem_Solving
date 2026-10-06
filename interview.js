const array = ["imran", "hasan", "rahim", "karim", "kiran"];

const chukSize = 2;
const chunk = [];
let group = [];

for (let i = 0; i < array.length; i++) {
  group.push(array[i]);
  if (group.length === chukSize) {
    chunk.push(group);
    group = [];
  }
}
if (group.length > 0) {
  chunk.push(group);
}

console.log(chunk);
