import createElement from "./createElement";
import header from "./header";
import inputSection from "./inputSection";
import { renderContent } from "./content";
import getWeatherData from "./getWeatherData";

let body = document.querySelector("body");

export async function renderBody() {
    let data = await getWeatherData("Lagos")
  bodyAppend([header, inputSection, renderContent(data,true)]);
}

export const bodyAppend = (items) => {
  items.forEach((item) => {
    body.append(item);
  });
};
