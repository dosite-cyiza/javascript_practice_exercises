const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
// second example
const primes =new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);

// third example
let user = new Map([
  ["name", "Alice"],
  ["age", 25]
]);
console.log(...user)

// for (let [key, value] of user) {
//   console.log(key + ": " + value);
// }
// name: Alice
// age: 25


