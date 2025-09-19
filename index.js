let x = 42; // integer
let y = 3.14; // float
console.log(`type of x: ${typeof x}`)
console.log(`type of y: ${typeof y}`)

let myName = "Brendan"; // string
let greeting = `Hello, ${myName}!`; // template literal
console.log(greeting);

// true/false
let isActive = true;
let isDone = false;

let a = null; // intentionally empty
let b; // undefined (no assignment yet)

let big = 123456789012345678901234567890n;
console.log(`type of big: ${typeof big}`)

let person = {
  name: "Alice",
  age: 30,
};
console.log(person.name); // "Alice"

let nums = [1, 2, 3];
nums.push(4); // [1, 2, 3, 4]

function add(a, b) {
  return a + b;
}

