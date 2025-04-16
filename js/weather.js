const apiKey = "0fd5a8ec487cafa1cc9f87e644846001";

const city = "Cancun";
const weatherDiv = document.getElementById("weather");

async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const temp = Math.round(data.main.temp);
    const condition = data.weather[0].main;
    const icon = data.weather[0].icon;

    weatherDiv.innerHTML = `
      <div class="weather-box">
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${condition}" />
        <span>${temp}°C | ${condition}</span>
      </div>
    `;
  } catch (error) {
    weatherDiv.innerText = "Weather unavailable";
    console.error("Weather fetch error:", error.message);
  }
}

fetchWeather();