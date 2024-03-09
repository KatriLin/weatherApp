import ThreeHourWeather from "./ThreeHourWeather";
import styled from "styled-components";
import colors from "../color";

const CityWeather = ({ weather, hourlyWeathers, cityWeathertoShow }) => {
  const addSpecialCharactersToCityName = (cityName) => {
    if (cityName.toLowerCase() === "jyvaskyla") {
      return "Jyväskylä";
    } else {
      return cityName;
    }
  };

  const selectedCity = cityWeathertoShow && cityWeathertoShow.id === weather.id;

  const threeHourWeathers = hourlyWeathers.find(
    (hourly) => hourly.city.id === weather.id,
  );

  const icon = weather?.weather?.[0]?.icon;
  const iconImage = icon
    ? `http://openweathermap.org/img/w/${icon}.png`
    : undefined;
  const hasHourlyWeatherData = !!threeHourWeathers;

  //get time
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  //get todays date
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleDateString("en-US", { month: "long" });

  //get the correct ending for the date
  const listOfLastDigits = [
    "th",
    "st",
    "nd",
    "rd",
    "th",
    "th",
    "th",
    "th",
    "th",
    "th",
  ];
  const lastDigit = day % 10;
  const dateEnding = listOfLastDigits[lastDigit];
  const formattedDate = `${month} ${day}${dateEnding}`;

  return selectedCity || !cityWeathertoShow ? (
    <WeatherWrapper>
      <DailyWeatherContainer>
        <TopLeftCorner>
          <CityName>{addSpecialCharactersToCityName(weather?.name)}</CityName>
          <WeatherDescription>
            {weather?.weather[0]?.description}
          </WeatherDescription>
        </TopLeftCorner>
        <TopRightCorner>
          {icon && (
            <WeatherIcon
              src={iconImage}
              alt="Weather Icon"
              className="weatherIcon"
            />
          )}
          <Temperature> {Math.round(weather?.main?.temp)}°C</Temperature>
        </TopRightCorner>
        <BottomLeftCorner>
          <FormatedDate>{formattedDate}</FormatedDate>
          <Time>
            {hours}:{minutes}
          </Time>
        </BottomLeftCorner>
        <BottomRightCorner>
          <p>Wind: {weather?.wind?.speed} m/s</p>
          <p>Humidity: {weather?.main?.humidity} % </p>
          <p>
            Precipitation:{" "}
            {weather?.rain?.["3h"] !== undefined
              ? `${Math.round(weather.rain["3h"])} mm`
              : "0 mm"}
          </p>
        </BottomRightCorner>
      </DailyWeatherContainer>

      {hasHourlyWeatherData && (
        <ThreeHourWeather threeHourWeathers={threeHourWeathers} />
      )}
    </WeatherWrapper>
  ) : null;
};

const WeatherWrapper = styled.div`
  margin: 15px 15px 20px 15px;
  @media (min-width: 768px) {
    /* styles for tablet*/
    margin: 15px;
  }
`;
const DailyWeatherContainer = styled.div`
  background-color: ${colors.whiteBackground};
  border: 1px solid ${colors.greyBorderColor};
  border-radius: 5px;
  margin: 10px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-row-gap: 10px;
`;

const TopLeftCorner = styled.div`
  margin-left: 15px;
`;

const CityName = styled.p`
  font-size: 19px;
  color: ${colors.primaryTextColor};
  margin-bottom: 0px;
`;

const WeatherDescription = styled.p`
  font-size: 13px;
  color: ${colors.secondaryTextColor};
  margin-top: 0px;
  text-transform: capitalize;
`;

const TopRightCorner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;
`;
const WeatherIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
const Temperature = styled.p`
  font-size: 26px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const BottomRightCorner = styled.div`
  margin-right: 15px;
  p {
    font-size: 13px;
    color: ${colors.secondaryTextColor};
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: right;
    white-space: nowrap;
  }
`;

const BottomLeftCorner = styled.div`
  margin-left: 15px;
  align-self: end;
`;

const FormatedDate = styled.p`
  margin-bottom: 0px;
  font-size: 15px;
  color: ${colors.primaryTextColor};
`;
const Time = styled.p`
  margin-top: 0px;
  font-size: 13px;
  color: ${colors.secondaryTextColor};
`;

export default CityWeather;
