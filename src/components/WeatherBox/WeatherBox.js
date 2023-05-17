import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback } from 'react';

const WeatherBox = props => {

  const weatherData = {};

  const API_KEY = 'f00b134e81dc7457844bd398abd1431f';

  const handleCityChange = useCallback(cityName => {
    console.log(cityName);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        weatherData.city = data.name;
        weatherData.temp = data.main.temp;
        weatherData.icon = data.weather[0].icon;
        weatherData.description = data.weather[0].main;
      });
  }, []);

  return (
    <section>
      <PickCity action={handleCityChange} />
      <WeatherSummary />
      <Loader />
    </section>
  )
};

export default WeatherBox;