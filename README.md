## WeatherRadar Frontend 

This weather application project is built with React and Vite, allowing users to get the weather data for the four cities and displaying the weather data. App is set to fecth the data every 5 minutes. 

# Get the project up and running

Clone the repository from gitHub https://github.com/KatriLin/weatherApp.git

In your command line, navigate to the project directory install dependencies by running:
```
npm install
```
# Get you api key for the project

Register in this address: https://home.openweathermap.org/
Get your API key from the service so that you can utilice the open weather map sercive.
Navigate to the root of your project and add ```.env``` file and add your Api key in to the file like this:
```VITE_WEATHER_API_KEY=your_api_key_here```

# To start the project run in the command line
```
npm run dev
```

Project will open in the localhost: http://localhost:5173/


# For testing run in the command line
```
npm test
```

Notes: City coordinates file is left to the front end as the project doesen´t have backend and database set up. 
In case of cities from different countries different time zone should also be added.   






