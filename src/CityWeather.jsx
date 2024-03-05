import ThreeHourWeather from './ThreeHourWeather';


const CityWeather = ({ weather, hourlyWeathers,cityWeathertoShow }) => {



const addSpecialCharactersToCityName = (cityName) => {
  if (cityName.toLowerCase() === 'jyvaskyla') {
    return 'Jyväskylä';
  } else {
    return cityName;
  }
};

const selectedCity = cityWeathertoShow && (cityWeathertoShow.id === weather.id);


  const threeHourWeathers = hourlyWeathers.find((hourly) => hourly.city.id === weather.id);

  const icon = weather?.weather?.[0]?.icon;
  const iconImage = icon ? `http://openweathermap.org/img/w/${icon}.png` : undefined
  const hasHourlyWeatherData = !!threeHourWeathers;
   
  return selectedCity || !cityWeathertoShow ? (
    <>

   
    <div className="cityDetails">
      <li>
        <p>{addSpecialCharactersToCityName(weather.name)}</p>
        <p>{weather.weather[0].description}</p>
        <p>Temperatura {weather.main.temp}</p>
        {icon && (
      <img
    src={iconImage}
    alt="Weather Icon"
    className="weatherIcon"
    />
    )}
        <p>Humidity {weather.main.humidity}</p>
        <p>Wind speed{weather.wind.speed}</p>
        <p> {weather?.rain?.["3h"]}</p>
      </li>
    </div>

    {hasHourlyWeatherData && <ThreeHourWeather threeHourWeathers={threeHourWeathers} />}
  
    </>
  ) : null;
};

export default CityWeather;

