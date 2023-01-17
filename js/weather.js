const API_KEY = "82e4a5c487823316298a5347fe8263e7";

function onGEOSuceess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((res) => {
    // Get information about the weather from the API
    res.json().then((data) => {
      const name = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const country = data.sys.country;

      const elementName = document.querySelector("div#weather div#name");
      const elementWeather = document.querySelector(
        "div#weather div#current-weather"
      );
      const elementTemp = document.querySelector("div#weather div#temperature");
      const elementHumidity = document.querySelector(
        "div#weather div#humidity"
      );
      const elementCountry = document.querySelector("div#weather div#country");

      elementName.innerHTML = `지역 : ${country}, ${name}`;
      elementWeather.innerHTML = `날씨 : ${weather}`;
      elementTemp.innerHTML = `현재 온도 : ${temp}℃`;
      elementHumidity.innerHTML = `습도 : ${humidity}`;
    });
  });
}

function onGEOError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGEOSuceess, onGEOError);
