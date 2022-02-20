let name = "Arjun";
let age = 21;

name = "AG";
name = "Lewi";

const class_name = "source";

let over21 = age !== 21 ? "hi" : 12312;

function add(num1, num2) {
  return num1 + num2;
}

let subtract = function(num1, num2) {
  return num1 - num2;
};

let multiply = (num1, num2) => {
  return num1 * num2;
};

let divide = (num1, num2) => {
  let result = num1 / num2;
  return result;
};

let remainder = (num1, num2) => num1 % num2;

console.log(remainder(10, 4));

console.log(multiply(1, 4));
console.log(divide(42, 2));

console.log(subtract(10, 5));

console.log(add(5, 10));

let person = {
  name: "Arjun",
  age: 21
};

person.name = "Lewi";
person.year = 4;

console.log("Name:" + person.name);
console.log("Age: " + person.age);
console.log("Year: " + person.year);

let classes = [
  "Source Pro",
  "Source Lite",
  123123,
  { name: "arjun" },
  () => console.log("HI")
];
classes.push("Source");
classes.push("Node");
classes.push("Wireframe");

console.log(classes);

classes.pop();
classes.pop();

console.log(classes);

classes.unshift("new first item");
console.log(classes);
classes.shift();
console.log(classes);

for (let i = 0; i < classes.length; i++) {
  console.log(classes[i]);
}

classes.forEach((element) => console.log(element));
