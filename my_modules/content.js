import createElement from "./createElement";
import { header,weatherDescription,temperature,toggleTemperatureButton,windSpeed } from "./elements";
import temperatureCalc from "./temperatureLogic";

export let content = createElement("div");
content.id = "content";


export function renderContent(data, found) {
  content.innerHTML = "";
  let temp
  if (found) {
    let viewInCelcius = false;
     temp = data.main.temp;

    header.innerHTML = `Location: ${data.name}`;
    weatherDescription.innerHTML = `Weather: ${data.weather[0].description}`;
    temperature.innerHTML = `Temperature: ${temperatureCalc(viewInCelcius,temp)} ${
      viewInCelcius ? "C" : "F"
    }`;
    toggleTemperatureButton.innerHTML = `View in ${
      viewInCelcius ? "Farenheit" : "Celcius"
    }`;
    toggleTemperatureButton.addEventListener("click", () => {
      viewInCelcius ? (viewInCelcius = false) : (viewInCelcius = true);

      temperature.innerHTML = `Temperature: ${temperatureCalc(viewInCelcius,temp)} ${
        viewInCelcius ? "C" : "F"
      }`;

      toggleTemperatureButton.innerHTML = `View in ${
        viewInCelcius ? "Farenheit" : "Celcius"
      }`;
    });
    windSpeed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;

    content.append(
      header,
      weatherDescription,
      temperature,
      toggleTemperatureButton,
      windSpeed
    );
  } else {
    content.innerHTML = "<h4>Location not found</h4>";
  }
  return content;
}
