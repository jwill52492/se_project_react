import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import { coordinates, APIkey } from '../../utils/constants';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
// import ModalWithForm from '../ModalWithForm/ModalWithForm';
import AddItemModal from '../AddItemModal/AddItemModal';
import ItemModal from '../ItemModal/ItemModal';
import Profile from '../Profile/Profile';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';
// import { defaultClothingItems } from '../../utils/constants';
import { getItems } from '../../utils/api';


function App() {
  const [weatherData, setWeatherData] = useState({ type:"", temperature: { F: 999 } });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

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



  const handleAddItemModalSubmit = ({ name, imageUrl, temp }) => {
    AddItemModal({ name, imageUrl, weather: temp })
    .then((newItem) => {
      setClothingItems((prevItems) => [newItem, ...prevItems]);
    });
    closeActiveModal();
  };

    const handleDeleteClick =(item) => {
      const itemId = item._id
        .removeItem(item_.id)
        .then(() => {
          setClothingItems((prevItems) => prevItems.filter(() => item.id !== itemId));
          closeActiveModal();
        })
        .catch(console.error);
    }

  useEffect(() => {
    getWeather(coordinates, APIkey)
    .then((data) => {
      const filteredData = filterWeatherData(data);
      setWeatherData(filteredData);
    })
    .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        console.log(data);
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);


  return (
    <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} username={"User name"}/>
          <Routes>
            <Route path="/" element = {
              <Main
              weatherData={weatherData}
              onCardClick={handleCardClick}
              currentTemperatureUnit={currentTemperatureUnit}
              clothingItems={clothingItems} />}
            />
            <Route path="/profile" element={<Profile onCardClick={handleCardClick} clothingItems={clothingItems}/>} />
          </Routes>

          <Footer />
        </div>
        <AddItemModal isOpen={activeModal === "add-garment"} onClose={closeActiveModal} onAddItemModalSubmit={handleAddItemModalSubmit}/>
        <ItemModal activeModal={activeModal} card={selectedCard} onClose={closeActiveModal} onDeleteClick={handleDeleteClick} />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App
