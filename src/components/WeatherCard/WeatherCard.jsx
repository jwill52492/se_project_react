import "./WeatherCard.css";
import { defaultWeatherOptions, weatherOptions } from "../../utils/constants";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const filteredOptions = weatherOptions.filter((option) => {
    return (option.day === weatherData.isDay && option.condition === weatherData.condition);
  });

  let weatherOption;

  if (filteredOptions.length > 0) {
    weatherOption = filteredOptions[0];
  } else {
    weatherOption = defaultWeatherOptions[weatherData?.isDay ? "day" : "night"];
  }


  return (
    <section className="weather-card">
      <p className="weather-card__temperature">{currentTemperatureUnit === "F" ? weatherData?.temp?.F : weatherData?.temp?.C}&deg;{currentTemperatureUnit}</p>
      <img className="weather-card__image" src={weatherOption?.url}
      alt={`Card showing ${weatherData?.isday ? "day" : "night"}time ${weatherOption?.condition} weather`} />
    </section>
  );
}

export default WeatherCard;