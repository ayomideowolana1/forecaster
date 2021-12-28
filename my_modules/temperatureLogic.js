let temperatureCalc = (viewInCelcius,temp) => {
  if (!viewInCelcius) {
    let tempInF = (((temp - 273.15) * 9) / 5 + 32).toFixed(2);
    return tempInF;
  } else {
    let tempInC = (temp - 273.15).toFixed(2);
    return tempInC;
  }
};

export default temperatureCalc