
const ThreeHourWeather = ({ threeHourWeathers }) => {
  if (!threeHourWeathers) {
    return null;
  }

  return (
    <div className='threeHourWeather'>
      {threeHourWeathers.list.map((threeHour) => {
        const time = new Date(threeHour.dt * 1000);
        const hours = time.getHours().toString().padStart(2, '0'); //extract hours from time
        const minutes = time.getMinutes().toString().padStart(2, '0'); // extract minutes from time
        const extractHour = `${hours}:${minutes}`;
        const icon = threeHour?.weather?.[0]?.icon;
        const iconImage = icon ? `http://openweathermap.org/img/w/${icon}.png` : undefined
        
        return (
          <div key={threeHour.dt}>
            <p>{threeHour.id}</p>
            <p>{extractHour}</p>
            <p>{threeHour.main.temp} C </p>
            <p>{threeHour.main.humidity} %</p>
            <p>{threeHour.wind.speed}m/s</p>
            <p>Precipitation{threeHour?.rain?.["3h"]}</p>
            
            <img
    src={iconImage}
    alt="Weather Icon"
    className="weatherIconInThreeHours"
    />
          
          </div>
        );
      })}
    </div>
  );
};

export default ThreeHourWeather;


