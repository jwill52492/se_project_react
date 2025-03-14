import { useEffect, useState } from 'react'

import './App.css'
import { coordinates, APIkey } from '../../utils/constants';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import ItemModal from '../ItemModal/ItemModal';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

function App() {
  const [weatherData, setWeatherData] = useState({ type:"", temperature: { F: 999 } });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  }

  const handleCardClick = (card) => {
    setActiveModal('preview');
    setSelectedCard(card);
  }

  const handleAddClick = () => {
    setActiveModal('add-garment');
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
    .then((data) => {
      const filteredData = filterWeatherData(data);
      setWeatherData(filteredData);
    })
    .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Main weatherData={weatherData} handleCardClick={handleCardClick}/>
          <Footer />
        </div>
        <ModalWithForm title="New garment" buttonText="Add garment" isOpen={activeModal === "add-garment"} onClose={closeActiveModal}>
          <label className="modal__label" htmlFor="name">
            Name{" "}
            <input type="text" className="modal__input" id="name" placeholder="Name" required />
          </label>
          <label className="modal__label" htmlFor="imageUrl">
            Image{" "}
            <input type="text" className="modal__input" id="imageUrl" placeholder="Image URL" required />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label className="modal__label modal__label_type_radio">
              <input type="radio" className="modal__radio-input" id="hot" name="temp" required />
                Hot
            </label>
            <label className="modal__label modal__label_type_radio">
              <input type="radio" className="modal__radio-input" id="warm" name="temp" required />
               Warm
            </label>
            <label className="modal__label modal__label_type_radio">
              <input type="radio" className="modal__radio-input" id="cold" name="temp" required />
                Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal activeModal={activeModal} card={selectedCard} onClose={closeActiveModal} />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App
