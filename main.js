/* START CODE UNDER THIS LINE */

const color = ["Blue "];
const negativeNumbers = [-1, -2, -3, -4, -5];
const food = ["Mansaf", " Maglobeh", "Shawerma"];
const numbers = [1, 3, 5][(2, 4, 6, 8)];

const orderedPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
const unorderedPlanets = ["Mars", "Earth", "Mercury", "Jupiter", "Venus"];

console.log(orderedPlanets[3]);
console.log(unorderedPlanets[0]);

const animals = ["Cat", "Dog", "Dolphin", "Squirrel", "Koala"];

console.log(animals.length);

const orderedPlanets1 = ["Mercury", "Venus", "Earth", "Jupiter"];
orderedPlanets[orderedPlanets.length] = "Mars";
console.log(orderedPlanets);

const unorderedPlanets1 = ["Neptune", "Earth", "Mercury"];
unorderedPlanets1[3] = "Mars";
console.log(unorderedPlanets1);

const animals1 = ["Cat", "Dog", "Dolphin", "Squirrel"];
animals1[0] = " Koala ";
console.log(animals1);

const reptiles = ["Snake", "Lizard", "Turtle"];
reptiles.push("Dinosaur");
console.log(reptiles);

const fish = ["Swordfish", "Clownfish", "Shark"];
fish.unshift("GoldFish");
console.log(fish);

reptiles.shift();
fish.pop();

console.log(reptiles);
console.log(fish);

const birthDay = [1, 9, 9, 3];
console.log(birthDay.join(""));

const names = ["John", "Doe", "The Third"];
console.log(names.join(" "));

const world = ["world", "hello"];
console.log(world.reverse());

const numbb = [1, 2, 3, 4];

console.log(numbb.reverse());
console.log(numbb.join("-"));

const addToArray = function (array, string) {
  array.push(string);
  return array;
};
console.log(addToArray(["Hello", "i", "am"], "John"));
console.log(addToArray(["Hello", "John", "i", "am"], "Jane"));

const convertToString = function (array) {
  return array.join(" ");
};
console.log(convertToString(["Hello", "i", "am", "John"]));
console.log(convertToString(["Hello", "John", "i", "am", "Jane"]));

const accessElement = function (array, index) {
  if (index >= 0 && index < array.length) {
    return array[index];
  } else {
    return " No Element at index " + index;
  }
};
console.log(accessElement([1, 2, 3, 4, 5], 1));
console.log(accessElement([1, 2, 3, 4, 5], 3));
console.log(accessElement([1, 2, 3, 4, 5], 10));

const isInArray = function (array, string) {
  return array.indexOf(string) !== -1;
};

console.log(isInArray(["John", "Jane", "Mark"], "Jane"));
console.log(isInArray(["John", "Jane", "Mark"], "Mark"));
console.log(isInArray(["John", "Jane", "Mark"], "Smith"));
console.log(isInArray(["John", "Jane", "Mark"], "Doe"));

const reverseWords = function (string) {
  let words = string.split(" ");

  if (words.length === 1) {
    return string;
  } else {
    let reverseWords = words.reverse().join(" ");
    return reverseWords;
  }
};
console.log(reverseWords("Hello"));
console.log(reverseWords("Hello World"));

///////// Write a function addToLast that accepts two arguments, array and value, and returns an array with the value added to the end of the array. Use unshift instead of push.

// do not use `push` or array assignments, only `unshift`
const addToLast = function (array, value) {
  // TODO: Your code here
};

addToLast([1, 2, 3], 4); // => [1, 2, 3, 4]
addToLast([10, 6], 1); // => [10, 6, 1]

/*
const getLength = function (array) {
  let count = 0
  array.forEach(0)
  count++
  return count

}
console.log(getLength([1, 2, 3, 4]));  // => 4
console.log(getLength([10, 22, 30]));  // => 3
*/

const getFirstVal = function (array) {
  return array.shift();
};

console.log(getFirstVal([1, 2, 3, 4])); // => 1
console.log(getFirstVal([51, 3, 3, 4])); // => 51

const randomFruit = function (array) {
  const randomFruit = Math.floor(Math.random() * array.length);
  return array[randomFruit];
};

const fruits = ["Apple", "Banana", "Strawberry", "Mango"];

console.log(randomFruit(fruits));
console.log(randomFruit(fruits));
console.log(randomFruit(fruits));
console.log(randomFruit(fruits));

const remove = function (array, index) {
  if (index >= 0 && index < array.length) {
    array.splice(index, 1);
  }
  return array;
};

console.log(remove([1, 2, 3], 1));
console.log(remove(["Hello", "John", "how", "are", "you"], 0));

const combineArrays = function (arrayOne, arrayTwo) {
  return arrayOne.concat(arrayTwo);
};

console.log(combineArrays([1, 2, 3], [4, 5]));
console.log(combineArrays([1, 1], [1, 1]));
