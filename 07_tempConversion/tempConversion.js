const convertToCelsius = function(farTemp) {
  let celcTemp = (farTemp - 32) * 5/9
  return Math.round(celcTemp * 10) / 10
};

const convertToFahrenheit = function(celcTemp) {
  let farTemp = (celcTemp * 9/5) + 32
  return Math.round(farTemp * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
