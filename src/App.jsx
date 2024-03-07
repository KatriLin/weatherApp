import { useState, useEffect } from 'react'
import fetchWeatherDataForCities from './fetchWeatherData';
import fetchThreeHourWeather from './fetchThreeHourWeather';
import { cities } from './cityCordinates';
import CityWeather from './components/CityWeather';
import Header from './components/Header';
import DropdownMenu from './components/DropdownMenu'
import colors from './color';
import styled, { createGlobalStyle } from 'styled-components';



function App() {
  const [weathers, setWeathers] = useState([])
  const [hourlyWeathers, setHourlyWeathers] = useState([])
  const [selectedCity, setSelectedCity] = useState("allCities");
  const [error, setError] = useState(null);

  const handleCitySelect = (cityId) => {
    setSelectedCity(cityId);

  }


 //check that the selectedCity id from dropdownmenu matches with the id from weathers array
 const cityWeathertoShow = weathers.find((weatherCity) => selectedCity === weatherCity.id.toString());


  useEffect(()=> {
    
    const api_key = import.meta.env.VITE_WEATHER_API_KEY
    // fetch current weatherdata for the cities and threehours interval weather data 
    
    const fetchData = async () => {
      try {
        
      const currectWeatherData = await fetchWeatherDataForCities(cities,api_key)
      setWeathers(currectWeatherData)
      const threeHourWeatherData = await fetchThreeHourWeather(cities, api_key)
      setHourlyWeathers(threeHourWeatherData)
    } catch (error) {
      setError(error.message);
      console.log("Error while fetching the data", error)
    }
    };
    fetchData();
  }, []);
  

 
  return (

    
    <div>
      
    <GlobalStyle />
    <Header />
    
    <DropdownMenu cities={cities} handleCitySelect={handleCitySelect} /> 
    <AppWrapper>
    {error ? (
                <ErrorMessage>Oops! Something went wrong while fetching weather data.</ErrorMessage>
            ) : (
       weathers.map((weather, index) => (
  <CityWeather key={index} hourlyWeathers={hourlyWeathers} weather={weather} cityWeathertoShow={cityWeathertoShow} />
       )
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

const ErrorMessage = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin-top: 40px;
`;
export default App
