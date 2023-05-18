const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
  let sum = 0
	arr.forEach(item => {
    sum += item;
  })
  return sum
}

const multiply = function(arr) {
  return (arr.reduce( (a,b) => a * b) )
};

const power = function(x, y) {
	return x ** y
};

const factorial = function(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
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
