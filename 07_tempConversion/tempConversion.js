const ftoc = function(tempF) {
  let celsius = (tempF - 32) * 5/9;
  celsius = Math.round(celsius *10)/10
  return celsius;
};

const ctof = function(tempC) {
  let fahrenheit = (tempC * 9/5) + 32;
  fahrenheit = Math.round(fahrenheit *10)/10
  
  return fahrenheit;




};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
