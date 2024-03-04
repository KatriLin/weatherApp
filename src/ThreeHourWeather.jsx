import React from 'react';

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
        
        return (
          <div key={threeHour.dt}>
            <p>{threeHour.id}</p>
            <p>{extractHour}</p>
            <p>{threeHour.main.temp} C </p>
            <p>{threeHour.main.humidity} %</p>
            <p>{threeHour.wind.speed}m/s</p>
            <p>Precipitation{threeHour?.rain?.["3h"]}</p>

          
          </div>
        );
      })}
    </div>
  );
};

export default ThreeHourWeather;


