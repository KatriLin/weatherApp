import axios from "axios"


const fetchWeatherDataForCities = async (cities, api_key) => {
  
const weatherInfo =  cities.map(city => {
    const {lat, lon} = city
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
return axios.get(apiUrl)
})
 
try {
const weatherInformation = await Promise.all(weatherInfo)
const data = weatherInformation.map(response => response.data)
return data
} catch(error) {
console.log("'Error with weather data fetching",error)
return [];
}
  }


  export default fetchWeatherDataForCities;
  


