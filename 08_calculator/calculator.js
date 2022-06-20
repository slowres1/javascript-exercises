const add = function(num1, num2) {
	let result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
  let result = num1 - num2;
  return result;
};

const sum = function(array) {
	let result = array.reduce((total, currentValue) => total + currentValue, 0);
  return result;
};

const multiply = function(array) {
  let result = array.reduce((total,currentValue) => total * currentValue, 1);
  return result;
};

const power = function(num1, num2) {
	let result = num1;
  for (i=1;i<num2;i++) {
    result = result * num1;
  }
  return result;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  let array = [];
  for (i=1; i<=num; i++) {
    array.push(i);
  }
  let result = array.reduce((total,currentValue) => total * currentValue, 1); 
  return result;
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
