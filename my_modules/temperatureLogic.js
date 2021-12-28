let temperatureCalc = (viewInCelcius, temp) => {
  if (!viewInCelcius) {
    // return temperature in Farenheit
    let tempInF = (((temp - 273.15) * 9) / 5 + 32).toFixed(2);
    return tempInF;
  } else {
    // return temperature in Celcius
    let tempInC = (temp - 273.15).toFixed(2);
    return tempInC;
  }
};

export default temperatureCalc;
