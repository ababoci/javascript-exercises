const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, element) => {
    return sum + element;
  }, 0)
};

// const multiply = function(arr) {
//   return arr.reduce((sum, element) => {
//     return sum * element;
//   }, 1)
// };

const multiply = function(array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(num) {
  if (num === 0) return 1;

  let total = 1;

  for (let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
