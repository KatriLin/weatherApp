import axios from "axios";

const fetchThreeHourWeather = async (cities, api_key) => {
  const hourlyweatherInformations = cities.map((city) => {
    const { lat, lon } = city;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=${api_key}&units=metric`;
    return axios.get(apiUrl);
  });

  try {
    const hourlyWeatherInformation = await Promise.all(
      hourlyweatherInformations,
    );
    const data = hourlyWeatherInformation.map((response) => response.data);
    return data;
  } catch (error) {
    throw new Error("Error fetching weather data for cities");
  }
};
export default fetchThreeHourWeather;
