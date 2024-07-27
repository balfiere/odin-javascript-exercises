const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0)
};

const multiply = function(array) {
  return array.reduce((product, current) => product * current, 1)
};

const power = function(a, b) {
  return Math.pow(a, b)
};

const factorial = function(a) {
  function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
	return a === 0 ? 1 : factorialize(a)
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
