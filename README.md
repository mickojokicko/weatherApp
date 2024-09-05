# Weather App

This application displays weather data based on the city name entered. Using the **OpenWeather API**, the app shows basic weather information such as temperature, humidity, wind speed, and a weather condition icon.

## Link:
https://vremensk-prognoza-milejokic.netlify.app/
The app is also optimized for mobile devices.

## Features

- **Display current weather data** for any city.
  - Temperature (in degrees Celsius).
  - Humidity (percentage).
  - Wind speed (in km/h).
  - Brief description of weather conditions (sunny, cloudy, rainy, etc.).
  - Display of weather condition icon.
- **Search cities** using the input field.
  - Search by clicking the button or pressing **Enter**.
- **Default city**: Initially, the app shows the weather for the city of **Banja Luka**.
- **Search error**: Displays an error message if the city is not found.

## Technologies Used

- **HTML**: For the basic structure of the user interface.
- **CSS**: For styling the app and displaying weather data.
- **JavaScript**: For dynamically fetching data from the API, validating searches, and updating the user interface.
- **OpenWeather API**: For retrieving weather data.
  - The API key used for accessing the OpenWeather API is defined in the JavaScript file as `apiKey`.

![Weather app](appPhoto/weather.png)
