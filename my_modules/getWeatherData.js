export default async function getWeatherData(location) {
  try {
    if (!location) {
      throw "bad-query";
    } else {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ce5b9505d40fa867b612de9e2db46b93`
      );
      let data = await response.json();
      return data;
    }
  } catch (err) {
    switch (err) {
      case "bad query":
        alert("Please Enter a valid location");
        break;
    }
  }
}
