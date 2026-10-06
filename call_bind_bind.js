const user = {
  name: "imran",
};

function greet(age) {
  console.log(`hello my name is ${this.name} and my age is${age}`);
}

// greet.call(user, 23);

// greet.apply(user, [22]);

const result = greet.bind(user);
result();
// result(23);
