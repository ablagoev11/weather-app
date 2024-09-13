const apiKey = "7MN254K9HL9L9JNVQW64NPD5E";

const getWeather = async (city) => {
  const weatherResponse = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`,
    { mode: "cors" }
  );
  const weatherData = await weatherResponse.json();
  console.log(weatherData);
  return weatherData;
};

const showWeather = (weatherData) => {
  const city = document.querySelector(".city");
  const time = document.querySelector(".time");
  const conditions = document.querySelector(".conditions");
  const temperature = document.querySelector(".temperature");
  const description = document.querySelector(".description");
  const image = document.querySelector(".weather-icon");

  city.textContent = weatherData.address;
  time.textContent = weatherData.currentConditions.datetime;
  conditions.textContent = weatherData.currentConditions.conditions;
  temperature.textContent = weatherData.currentConditions.temp;
  description.textContent = weatherData.description;
  image.src = `./images/${weatherData.currentConditions.icon}.png`;
};

const input = document.querySelector("#location");
const button = document.querySelector("button");

button.addEventListener("click", async () => {
  const location = input.value;
  const weatherData = await getWeather(location);
  showWeather(weatherData);
});
