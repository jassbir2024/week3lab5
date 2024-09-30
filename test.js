const ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

const adults = ages.filter(checkAdult);
console.log("Adults:", adults);
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const longWords = words.filter(function (word) {
  return word.length > 6;
});

console.log("Long words:", longWords);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log("Even numbers:", evenNumbers);
