import styled from 'styled-components';
import colors from './color';

const ThreeHourWeather = ({ threeHourWeathers }) => {
  if (!threeHourWeathers) {
    return null;
  }

  return (
    <ThreeHourWeatherWrap>
      {threeHourWeathers.list.map((threeHour) => {
        const time = new Date(threeHour.dt * 1000);
        const hours = time.getHours().toString().padStart(2, '0'); //extract hours from time
        const minutes = time.getMinutes().toString().padStart(2, '0'); // extract minutes from time
        const extractHour = `${hours}:${minutes}`;
        const icon = threeHour?.weather?.[0]?.icon;
        const iconImage = icon ? `http://openweathermap.org/img/w/${icon}.png` : undefined
        return (
          <ThreeHourItem key={threeHour.dt}>
            
            <CurrentTime>{extractHour}</CurrentTime>
            <img
        src={iconImage}
        alt="Weather Icon"
        className="weatherIconInThreeHours"
        />
            <Temperature>{Math.round(threeHour.main.temp)}°C </Temperature>
            
            <TemperatuDetailsWrap>
            <p>{threeHour.wind.speed}m/s</p>
            <p>{threeHour.main.humidity} %</p>
            <p>{threeHour?.rain?.['3h'] !== undefined ? `${threeHour.rain['3h']} mm` : '0 mm'}</p>
            </TemperatuDetailsWrap>
   
          
          </ThreeHourItem>
        );
      })}
    </ThreeHourWeatherWrap>
  );
};



const ThreeHourWeatherWrap =styled.div`
display: flex;
`;

const ThreeHourItem =styled.div`
margin: 4px;
text-align: center; 
width: calc(20% - 8px);  
background-color: ${colors.whiteBackground};
border: 1px solid ${colors.greyBorderColor};
border-radius: 5px;

&:first-child {
    margin-left: 0px;
  }

  &:last-child {
    margin-right: 0px;
  }
  
`;


const CurrentTime =styled.p`
font-size: 13px;
color: ${colors.secondaryTextColor};
margin-bottom: 0px;
`;


const Temperature =styled.p`
font-size: 15px;
color: ${colors.primaryTextColor};
margin-top: 0px;
`;

const TemperatuDetailsWrap = styled.div`
background-color: ${colors.lightBlueBackground};
padding: 5px 0 5px 0;
p {
  font-size: 10px;
  color: ${colors.secondaryTextColor};
  margin-top: 0px;
  margin-bottom: 0px;
  white-space: nowrap;
  }


`;




export default ThreeHourWeather;


