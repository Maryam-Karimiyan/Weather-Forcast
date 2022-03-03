//this file is for dom manipulation
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const detail = document.querySelector(".details");
const timeimg = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUi = (data) => {
  // const { cityDetails, weather } = data;
  const cityDetails = data.cityDetails;
  const weather = data.weather;
  // update details template
  detail.innerHTML = ` 
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
    </div>`;
  //update the night/day & icon images
const iconSrc=`icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src',iconSrc)

  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = "icons/day.jpg";
  } else {
    timeSrc = "icons/night.jpg";
  }
  timeimg.setAttribute("src", timeSrc);

  //remove the d-none class from card
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
  return {
    cityDetails: cityDetails,
    weather: weather,
    //cause they're the same name we can just type only one of them like weather
  };
};
cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update ui whith new city
  updateCity(city)
    .then((data) => {
      updateUi(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
