import "./WeatherCard.css";
import { defaultWeatherOptions, weatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (option.day === weatherData.isDay && option.condition === weatherData.condition);
  });

  let weatherOption;

  if (filteredOptions.length > 0) {
    weatherOption = defaultWeatherOptions[weatherData?.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }


  return (
    <section className="weather-card">
      <p className="weather-card__temperature">{weatherData?.temp?.F} &deg; F</p>
      <img className="weather-card__image" src={weatherOption?.Url}
      alt={`Card showing ${weatherOption?.day ? "day" : "night"}time ${weatherOption?.condition} weather`} />
    </section>
  );
}

export default WeatherCard;