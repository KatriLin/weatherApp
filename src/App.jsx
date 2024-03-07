import { useState, useEffect } from 'react'
import fetchWeatherDataForCities from './fetchWeatherData';
import fetchThreeHourWeather from './fetchThreeHourWeather';
import { cities } from './cityCordinates';
import CityWeather from './CityWeather';
import Header from './Header';
import DropdownMenu from './DropdownMenu'
import colors from './color';
import styled, { createGlobalStyle } from 'styled-components';



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
    // fetch current weatherdata for the cities and threehours interval weather data 
    const fetchData = async () => {
      const currectWeatherData = await fetchWeatherDataForCities(cities,api_key)
      setWeathers(currectWeatherData)
      const threeHourWeatherData = await fetchThreeHourWeather(cities, api_key)
      setHourlyWeathers(threeHourWeatherData)
     
    }
    fetchData();
  }, []);
  

 
  return (

    
    <div>
    <GlobalStyle />
    <Header />
    <DropdownMenu cities={cities} handleCitySelect={handleCitySelect} /> 
    <AppWrapper>
       {weathers.map((weather, index) => (
  <CityWeather key={index} hourlyWeathers={hourlyWeathers} weather={weather} cityWeathertoShow={cityWeathertoShow} />
))}
 </AppWrapper>
    </div>
   
  )
}


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.lightGreyBackground};
    font-family: Arial, sans-serif;
    margin: 0px;
  
  }
`;


const AppWrapper = styled.div`
margin: 0px;
max-width: 100%;
@media (min-width: 768px) { /* styles for tablet display the weathercontainer element next to eachother in tablet*/
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: auto auto;


  } 
  @media (min-width: 1024px) { /* Desktop view */
    max-width: 1024px;
    margin: 0 auto;
  }
  
`;
export default App
