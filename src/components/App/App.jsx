import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";


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
import { addCard, deleteCard, getItems, addItem, cardLike, updateUserInfo, getUserData } from '../../utils/api';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import EditProfileModal from '../EditProfileModal/EditProfileModal';
import { signup, signin, tokenCheck } from '../../utils/auth';


function App() {
  const [weatherData, setWeatherData] = useState({ type:"", temperature: { F: 999 } });
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const openRegisterModal = () => {
    setActiveModal("sign-up");
  };

  const openLoginModal = () => {
    setActiveModal("login");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal('preview');
  }

  const handleDeleteClick = (card) => {
     setSelectedCard(card);
     setActiveModal('delete');
   }

  const handleAddClick = () => {
    setActiveModal('add-garment');
  };

  const handleEditProfileClick = () => {
    setActiveModal('change-profile');
  }


  const closeActiveModal = () => {
    setActiveModal(null);
  };

  const switchToLoginModal = () => {
    closeActiveModal("")
    setActiveModal('login');
  };

  const switchToSignUpModal = () => {
    closeActiveModal("")
    setActiveModal('sign-up');
  };

  const handleSignOutClick = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  };

  const handleTokenCheck = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      tokenCheck(token)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          setIsLoggedIn(false);
        });
    }
  }

  useEffect(() => {
    handleTokenCheck();
  }, [])

  const handleSignIn = ({ email, password }) => {
    signin(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        getUserData()
          .then((userData) => {
            setCurrentUser(userData);
            handleTokenCheck();
            navigate("/profile");
          })
          .catch(console.error);
      })
      .catch(console.error);
  }

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
  }


  const handleCardLike = ({ id, isLiked }) => {
  const token = localStorage.getItem("jwt");
  isLiked
    ? addCardLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch((err) => console.log(err))
    : removeCardLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch((err) => console.log(err));
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

  const handleSignInModalSubmit = ({ email, password }) => {
    signin(email, password)
      .then((data) => {
        console.log(data);
        localStorage.setItem("jwt", data.token);
        getUserData()
        .then((UserData) => {
        setCurrentUser(UserData)
        closeActiveModal()
      });
      setIsLoggedIn(true)
      })
      .catch(console.error);
  }

  const handleEditProfileSubmit = (userData) => {
    updateUserInfo(userData, localStorage.getItem("jwt"))
      .then((res) => {
        setCurrentUser(res);
        closeActiveModal();
      })
      .catch((error) =>
        console.log(error));
  }

  useEffect(() => {
    getUserData();
  }, []);

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
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  const ProtectedRoute = ({ isloggedIn, children }) => {
   return isloggedIn ? children : <Navigate to="/" />;
  };


  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn, handleSignOut }}>
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit, handleToggleSwitchChange }}>
        <div className="page">
          <div className="page__content">
            <Header
            handleAddClick={handleAddClick}
            weatherData={weatherData}
            username={currentUser?.name}
            isLoggedIn={isLoggedIn}
            handleRegisterClick={openRegisterModal}
            handleLoginClick={openLoginModal}
            />
            <Routes>
              <Route path="/" element = {
                <Main
                weatherData={weatherData}
                handleCardClick={handleCardClick}
                handleCardLike={handleCardLike}
                clothingItems={clothingItems}
                handleDeleteClick={handleDeleteClick}
                onSignIn={handleSignIn}/>}
              />
              <Route path="/profile" element={
                <ProtectedRoute isloggedIn={isLoggedIn}>
                  <Profile
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    username={currentUser?.name}
                    addItem={addItem}
                    deleteClick={handleDeleteClick}
                    handleAddClick={handleAddClick}
                    handleCardLike={handleCardLike}
                    handleEditProfileClick={handleEditProfileClick}
                    handleSignOutClick={handleSignOutClick}
                  />
                </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
          </div>
          <AddItemModal isOpen={activeModal === "add-garment"} onClose={closeActiveModal} handleAddItemModalSubmit={handleAddItemModalSubmit}/>
          <ItemModal isOpen={activeModal === 'preview'} card={selectedCard} onClose={closeActiveModal} handleDeleteClick={handleDeleteClick} />
          <DeleteModal isOpen={activeModal === 'delete'} card={selectedCard} onClose={closeActiveModal} handleDeleteModalSubmit={handleDeleteModalSubmit}/>
          <LoginModal isOpen={activeModal === 'login'} onClose={() => setActiveModal(null)} switchToSignUp={switchToSignUpModal} handleSignInModalSubmit={handleSignInModalSubmit} />
          <RegisterModal isOpen={activeModal === 'sign-up'} onClose={() => setActiveModal(null)} switchToLogin={switchToLoginModal} handleRegisterModalSubmit={handleRegisterModalSubmit}/>
          <EditProfileModal isOpen={activeModal === 'change-profile'} onClose={closeActiveModal} handleEditProfileSubmit={handleEditProfileSubmit}/>
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App
