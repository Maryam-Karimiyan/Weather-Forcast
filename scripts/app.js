//this file is for dom manipulation
const cityForm=document.querySelector('form');

const updateCity=async (city)=>{
const cityDetails=await getCity(city);
const weather=await getWeather(cityDetails.Key);
return {
    cityDets:cityDetails,
    weather:weather
    //cause they're the same name we can just type only one of them like weather
}
}
cityForm.addEventListener('submit',e=>{
    e.preventDefault();
    //get city value
    const city=cityForm.city.value.trim();
    cityForm.reset();

    //update ui whith new city
updateCity(city)
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
});
})