import { renderContent } from "./content";
import createElement from "./createElement";
import getWeatherData from "./getWeatherData";

let inputSection = createElement("div");
inputSection.id = "inputSection";

let input = createElement("input");
input.placeholder = "Enter a location";
input.addEventListener("focus", (e) => {
  e.target.value = "";
});

let button = createElement("button");
button.id="getWeatherReport"
button.innerHTML = "Get weather report";
button.addEventListener("click", async () => {
  if (input.value) {
    let found;
    let data = await getWeatherData(input.value);
    data.message == "city not found" ? (found = false) : (found = true);
    renderContent(data, found);
  } else {
    alert("Location cannot be Empty");
  }
});

inputSection.append(input, button);

export default inputSection;
