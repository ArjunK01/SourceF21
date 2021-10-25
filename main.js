const original = Array(10)
   .fill()
   .map((_, index) => index + 1);

console.log(`original array is ${original}`);

// save first three items:
const [first, second, third] = original; // same as const [first, second, third] = [1,2,3,4,5,6,7,8,9,10];
console.log(`first few items: ${first}, ${second}, ${third}`);

// spread all items,
const [...allItems] = original;
console.log(`destructured all items: ${allItems}`);

// save first few, spread the rest:
const [firstAgain, secondAgain, ...theRest] = original;
console.log(
   `First: ${firstAgain}, second: ${secondAgain}, the rest: ${theRest}`
);
