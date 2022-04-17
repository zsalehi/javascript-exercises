const add = function(...args) {
	return args.reduce(function (acc, cur){
    return acc + cur;
  })
};

const subtract = function(...args) {
	return args.reduce(function (acc, cur){
    return acc - cur;
  })
};

const sum = function(arr) {
	let sumOfNumbers = 0;
  for(var i = 0; i < arr.length; i++){
    sumOfNumbers += arr[i];
  }
  return sumOfNumbers;
};

const multiply = function(arr) {
  return arr.reduce(function(acc, cur){
    return acc * cur;
  })
};

const power = function(...args) {
	return args.reduce(function (acc, cur){
    return acc ** cur;
  })
};

const factorial = function(num) {
	// If the number is less than 0 return -1 since no factorials can be done.
  if (num < 0)
    return -1;
  // If the number is 0, its factorial is 1.
  else if (num === 0)
    return 1;
  else {
    // This is a recursive function, and so it calls itself again and again until the num-1 becomes 1 
    return (num * factorial(num-1));

  }
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
