//this file is for interacting with apis
const key = "vEZ5aEnLpxLg2UuO9cMizBufOszvltgj";

//get weather information
const getWeather = async (key_id) => {
  try {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${key_id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
    
  } catch (err) {
    alert(err);
  }
};

//get city information
const getCity = async (city) => {
  try {
    const base =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
  } catch (err) {
    alert(err);
  }
};
getCity("manchester")
  .then((data) => {
    return getWeather(data.Key);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
