import ThreeHourWeather from './ThreeHourWeather';

const CityWeather = ({ weather, hourlyWeathers }) => {
  const threeHourWeathers = hourlyWeathers.find((hourly) => hourly.city.id === weather.id);
  console.log("threeHourWeather", threeHourWeathers);
  console.log('threeHourWeather by city', threeHourWeathers?.city.name, threeHourWeathers?.city.id);

    const hasHourlyWeatherData = !!threeHourWeathers;
  return (
    <>
    <div className="cityDetails">
      <li>
        <p>{weather.name}</p>
        <p>{weather.weather[0].description}</p>
        <p>Temperatura {weather.main.temp}</p>
        <p>Humidity {weather.main.humidity}</p>
        <p>Wind speed{weather.wind.speed}</p>
        <p> {weather?.rain?.["3h"]}</p>
      </li>

      
      
    </div>
    {hasHourlyWeatherData && <ThreeHourWeather threeHourWeathers={threeHourWeathers} />}
    </>
  );
};

export default CityWeather;

