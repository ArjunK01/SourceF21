//variables
let name = "arjun";

name = "vinay";
name = true;

//constants

const age = 20;

//function
function add(a, b) {
  let addition = a + b;
  return addition;
}

console.log(add(1, 2));

//Arrow Function

const subtract = (a, b) => {
  return a - b;
};
subtract(10, 7);

const getTime = today => {
  return today + " 5pm";
  console.log("will never be run");
};
console.log(getTime("Friday"));

// function getTime(today){
//     return today + " 5pm"
// }

const fullName = (firstName, lastName) => firstName + lastName;

const multiply = (a, b) => {
  return a * b;
};
//comment

//conditional
let num = 200;
if (num < 10) {
  console.log("num is less than 10");
} else if (num < 100) {
  console.log("num is less than 100");
} else {
  console.log("num is greater than 100");
}

let myAge = 20;
if (myAge === 20) {
  console.log("IM 20!");
}

if (myAge < 100 && myAge > 0 && myAge === 19) {
  console.log("age is less than 100");
}

if (myAge < 0 || myAge === 20) {
  console.log("here");
}

//ternary
let weather = "sunny";

let jacket = weather === "raining" ? true : false;

console.log("I should wear a jacket: ", jacket);

//loops

//object
let person = { name: "arjun", age: 20 };
console.log(person.age);

person.class = "source";

console.log(person);

//array
let arrayOfNames = ["arjun", "vinay", "peter"];
console.log(arrayOfNames[2]);

arrayOfNames.push("sam");

console.log(arrayOfNames);

arrayOfNames.pop();

console.log(arrayOfNames);

arrayOfNames.unshift("McKayla");

console.log(arrayOfNames);

arrayOfNames.shift();
console.log(arrayOfNames);

console.log(arrayOfNames.length);

console.log(arrayOfNames[arrayOfNames.length - 1]);

let newNames = ["eddie", "cameron", "anna grace"];

for (let i = 0; i < newNames.length; i++) {
  console.log(newNames[i]);
}

newNames.forEach(temp => console.log(temp));

//array of odd numbers 0-100, then add them all together and print them out

//create an array of book objects (title, author),
//then use a forEach to print author of
//them each out

//create an arrow function for converting Celsius to farenheit

//Create an array of names, and create a function to delete a name based on
//the parameter
//ex. delete("arjun") should delete "arjun" from the array

const App = () => {
  return (
    <div>
      <p>Arjun!!!</p>
    </div>
  );
};
