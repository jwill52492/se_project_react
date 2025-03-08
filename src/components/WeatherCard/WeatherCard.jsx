import "./WeatherCard.css";
import sunny from '../../assets/sunny.svg';

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temperature">{weatherData.temp.F} &deg; F</p>
      <img className="weather-card__image" src={sunny} alt="" />
    </section>
  );
}

export default WeatherCard;