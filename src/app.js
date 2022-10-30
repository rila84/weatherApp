let now = new Date();
let days = ["Sun", "Mon", "Thu", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
let date = document.querySelector("#current-date");
date.innerHTML = `${day}: ${hour}: ${minute}`;

function showWeatherInformation(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#celsius").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}
function search(city) {
  let apiKey = "5d9235a86e48ae6996d42d29c5604b9e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherInformation);
}
function submit(event) {
  event.preventDefault();
  let city = document.querySelector("#current-city");
  let cityInput = document.querySelector("#search-inputText").value;
  city.innerHTML = cityInput;
  search(cityInput);
}

let submitCity = document.querySelector("#search-box");
submitCity.addEventListener("submit", submit);

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "5d9235a86e48ae6996d42d29c5604b9e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherInformation);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentlocation = document.querySelector("#current-location");
currentlocation.addEventListener("click", getCurrentLocation);
