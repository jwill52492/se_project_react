import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
//import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";



function Main({ weatherData, handleCardClick, clothingItems, handleCardLike }) {

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">Today is {currentTemperatureUnit === "F" ? weatherData?.temp?.F : weatherData?.temp?.C}&deg;{currentTemperatureUnit}
           / You may want to wear:</p>
        <ul className="cards__list">
          {clothingItems.filter((card) => {
            return card.weather === weatherData.type;
          })
          .map((card) => {
            return <ItemCard key={card._id} card={card} handleCardClick={handleCardClick} handleCardLike={handleCardLike}/>
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;