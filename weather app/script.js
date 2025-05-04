const apiKey = "19fa9f3a35c4b7bb0cab9682374d7e58";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const planBtn = document.getElementById("planBtn");
const destinationInput = document.getElementById("destinationInput");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  if (!city) return;

  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    document.querySelector(".city").innerText = data.name || "Unknown";
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "images/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "images/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "images/mist.png";
        break;
      default:
        weatherIcon.src = "images/clear.png";
    }
  } catch (error) {
    alert("Failed to fetch weather. Please check city name.");
  }
}

planBtn.addEventListener("click", () => {
  const city = destinationInput.value.trim();
  if (city) checkWeather(city);
});
