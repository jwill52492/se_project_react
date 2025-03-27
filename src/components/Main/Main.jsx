import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
//import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, onCardClick, currentTemperatureUnit, clothingItems }) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">Today is {currentTemperatureUnit === "F" ? weatherData?.temp?.F : weatherData?.temp?.C}&deg;{currentTemperatureUnit}
           / You may want to wear:</p>
        <ul className="cards__list">
          {clothingItems.filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return <ItemCard key={item._id} item={item} onClick={onCardClick}/>
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;