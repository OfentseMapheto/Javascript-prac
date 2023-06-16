/**
 @param {number} num 
 @returns {number} 
 */
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

/**
 * Represents a Person with a name and age.
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

/**
 * @returns {Promise<Object>}
 */
async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

const number = 5;
const result = factorial(number);
console.log(`Factorial of ${number} is: ${result}`);

const john = new Person('John Doe', 25);
john.printDetails();

fetchUserData()
  .then((userData) => {
    console.log('Fetched user data:', userData);
  })
  .catch((error) => {
    // Handle error
  });
