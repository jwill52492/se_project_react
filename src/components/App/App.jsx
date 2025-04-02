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
import DeleteModal from '../DeleteModal/DeleteModal';
import Profile from '../Profile/Profile';
import { getWeather, filterWeatherData } from '../../utils/weatherApi';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';
// import { defaultClothingItems } from '../../utils/constants';
import { addCard, deleteCard, getItems } from '../../utils/api';


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

  const handleDeleteClick = (card) => {
     setActiveModal('delete');
     setSelectedCard(card);
   }

  const handleAddClick = () => {
    setActiveModal('add-garment');
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };



  const handleAddItemModalSubmit = ({ name, imageUrl, temp }) => {
    addCard({ name, imageUrl, weather: temp })
    .then((newItem) => {
      setClothingItems((prevItems) => [newItem, ...prevItems]);
    });
    closeActiveModal();
  };

  const handleDeleteModalSubmit = () => {
    const itemId = selectedCard._id;
    deleteCard(itemId)
    .then(() => {
      setClothingItems((prevItems) => prevItems.filter(() => itemId !== itemId));
      closeActiveModal();
    })
    .catch(console.error);
  };

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
              clothingItems={clothingItems}
              onDeleteClick={handleDeleteClick} />}
            />
            <Route path="/profile" element={
              <Profile
              onCardClick={handleCardClick}
              clothingItems={clothingItems}
              onDeleteClick={handleDeleteClick}
              handleAddClick={handleAddClick} />}
              />
          </Routes>

          <Footer />
        </div>
        <AddItemModal isOpen={activeModal === "add-garment"} onClose={closeActiveModal} onAddItemModalSubmit={handleAddItemModalSubmit}/>
        <ItemModal isOpen={activeModal === 'preview'} card={selectedCard} onClose={closeActiveModal} onDeleteClick={handleDeleteClick} />
        <DeleteModal isOpen={activeModal === 'delete'} onClose={closeActiveModal} onDeleteModalSubmit={handleDeleteModalSubmit}/>
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App
