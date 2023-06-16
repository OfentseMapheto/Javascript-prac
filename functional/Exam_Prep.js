// Variables and Data Types
let name = "John";
const age = 25;
var isStudent = true;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Is Student: ${isStudent}`);

// Arrays and Looping
const numbers = [1, 2, 3, 4, 5];

console.log("Numbers:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Objects and Functions
const person = {
  firstName: "John",
  lastName: "Doe",
  greet: function() {
    console.log(`Hello, ${this.firstName} ${this.lastName}!`);
  }
};

person.greet();

// Higher-Order Functions
const fruits = ["apple", "banana", "cherry"];
const uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());

console.log("Uppercased Fruits:", uppercasedFruits);

// Asynchronous Programming
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

async function processData() {
  console.log("Fetching data...");
  const data = await fetchData();
  console.log(data);
}

processData();

// Error Handling
try {
  throw new Error("Oops! Something went wrong.");
} catch (error) {
  console.log("Error:", error.message);
}

// Modules (ES6 Modules)
import { add, subtract } from "./math.js";

console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(8, 4));
