import './App.css'
import { useState, useEffect } from 'react'
import fetchWeatherDataForCities from './fetchWeatherData';
import fetchThreeHourWeather from './fetchThreeHourWeather';
import { cities } from './cityCordinates';
import CityWeather from './CityWeather';
import Header from './Header';

function App() {
  const [weathers, setWeathers] = useState([])
  const [hourlyWeathers, setHourlyWeathers] = useState([])

  


  useEffect(()=> {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY

    const fetchWeather = async () => {
      const data = await fetchWeatherDataForCities(cities,api_key)
      setWeathers(data)
     
    }
    fetchWeather();
  }, []);
  
  useEffect(() => {
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
       <ul>
       {weathers.map((weather, index) => (
  <CityWeather key={index} hourlyWeathers={hourlyWeathers} weather={weather} />
))}
   </ul>
    </>
  )
}

export default App
