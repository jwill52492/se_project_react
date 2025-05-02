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
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { addCard, deleteCard, getItems } from '../../utils/api';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import EditProfileModal from '../EditProfileModal/EditProfileModal';


function App() {
  const [weatherData, setWeatherData] = useState({ type:"", temperature: { F: 999 } });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      closeActiveModal();
    })
    .catch(console.error);
  };

  const handleDeleteModalSubmit = () => {
    const itemId = selectedCard._id;
    deleteCard(itemId)
    .then(() => {
      setClothingItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
      closeActiveModal();
    })
    .catch(console.error);
  };

  const handleRegisterModalSubmit = ({ email, password, name, avatarUrl }) => {
    signup(email, password, name, avatarUrl)
      .then((data) => {
        console.log(data);
        closeActiveModal();
      })
      .catch(console.error);
  }

  const handleLoginModalSubmit = ({ email, password }) => {
    login(email, password)
      .then((data) => {
        console.log(data);
        closeActiveModal();
      })
      .catch(console.error);
  }

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    !isLiked
      ?
        api
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) => cards.map((item) =>
              (item._id === id ? updatedCard : item)));
    })
    .catch((err) => console.log(err))
      :
        api
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) => cards.map((item) =>
              (item._id === id ? updatedCard : item)));
    })
    .catch((err) => console.log(err));
  }

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
  }

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    navigate("/");
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
      .then(( data ) => {
        console.log(data);
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);


  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn, handleLogout }}>
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
        <div className="page">
          <div className="page__content">
            <Header handleAddClick={handleAddClick} weatherData={weatherData} username={"User name"}/>
            <Routes>
              <Route path="/" element = {
                <Main
                weatherData={weatherData}
                onCardClick={handleCardClick}
                clothingItems={clothingItems}
                onDeleteClick={handleDeleteClick}
                onCardLike={handleCardLike}
                onLogin={handleLogin} />}
              />
              <Route path="/profile" element={
                <Profile
                onCardClick={handleCardClick}
                clothingItems={clothingItems}
                onDeleteClick={handleDeleteClick}
                handleAddClick={handleAddClick}
                onCardLike={handleCardLike}
                onSignOut={handleSignOut} />}
                />
            </Routes>

            <Footer />
          </div>
          <AddItemModal isOpen={activeModal === "add-garment"} onClose={closeActiveModal} onAddItemModalSubmit={handleAddItemModalSubmit}/>
          <ItemModal isOpen={activeModal === 'preview'} card={selectedCard} onClose={closeActiveModal} onDeleteClick={handleDeleteClick} />
          <DeleteModal isOpen={activeModal === 'delete'} card={selectedCard} onClose={closeActiveModal} onDeleteModalSubmit={handleDeleteModalSubmit}/>
          <LoginModal isOpen={activeModal === 'login'} onClose={closeActiveModal} onLoginModalSubmit={handleLoginModalSubmit} onRegisterClick={() => setActiveModal('register')}/>
          <RegisterModal isOpen={activeModal === 'sign up'} onClose={closeActiveModal} onRegisterModalSubmit={handleRegisterModalSubmit} onLoginClick={() => setActiveModal('login')}/>
          <EditProfileModal isOpen={activeModal === 'change-profile'} onClose={closeActiveModal} onEditProfileSubmit={handleEditProfileSubmit}/>
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App
