import './App.css'
import { useState, useEffect } from 'react'
import fetchWeatherDataForCities from './fetchWeatherData';
import fetchThreeHourWeather from './fetchThreeHourWeather';
import { cities } from './cityCordinates';
import CityWeather from './CityWeather';
import Header from './Header';
import DropdownMenu from './DropdownMenu'


function App() {
  const [weathers, setWeathers] = useState([])
  const [hourlyWeathers, setHourlyWeathers] = useState([])
  const [selectedCity, setSelectedCity] = useState("allCities");

  const handleCitySelect = (cityId) => {
    setSelectedCity(cityId);

  }


 //check that the selectedCity id from dropdownmenu matches with the id from weathers array
 const cityWeathertoShow = weathers.find((weatherCity) => selectedCity === weatherCity.id.toString());


  useEffect(()=> {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY
    // fetch current weatherdata for the cities
    const fetchWeather = async () => {
      const data = await fetchWeatherDataForCities(cities,api_key)
      setWeathers(data)
     
    }
    fetchWeather();
  }, []);
  
  useEffect(() => {
    //fetch threehour weather interval for the cities
    const api_key = import.meta.env.VITE_WEATHER_API_KEY
    const getThreehoursWeatherInfo = async () => {
      const IntervalData = await fetchThreeHourWeather(cities, api_key)
      setHourlyWeathers(IntervalData)
    
    }
    getThreehoursWeatherInfo();
  }, []);
  
 

 
  return (
    <>
       <Header />
       <DropdownMenu cities={cities} handleCitySelect={handleCitySelect} />
       <ul>
       {weathers.map((weather, index) => (
  <CityWeather key={index} hourlyWeathers={hourlyWeathers} weather={weather} cityWeathertoShow={cityWeathertoShow} />
))}
   </ul>
  
    </>
  )
}

export default App
