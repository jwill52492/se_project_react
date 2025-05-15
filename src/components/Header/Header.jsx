import { Link } from 'react-router-dom';
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import React, {useContext} from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Header({ handleAddClick, weatherData, isLoggedIn, handleLoginClick, handleRegisterClick }) {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const { currentUser } = useContext(CurrentUserContext);


  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>

      <p className="header__date-and-location">{currentDate}, {weatherData.city}</p>
      <nav className="navigation">
        {isLoggedIn ? (
        <ul className="navigation__container">
          <ToggleSwitch />
          <li>
            <button className="header__add-clothes-button" type="button" onClick={handleAddClick}>
             + Add Clothes
            </button>
          </li>
          <li>
            <Link to="/profile" className="profile__link">
              <p className="header__username"> {currentUser?.name} </p>
                {currentUser?.avatar ? (
                <img className="navigation__user" src={currentUser?.avatar || avatar} alt="user avatar" />
              ) : (
                <span className="navigation__user navigation__user_type_none">
                  {currentUser?.name?.toUpperCase().charAt(0) || "User"}
                </span>
              )}
            </Link>
          </li>
        </ul>
        ) : (
        <ul className="navigation__container">
          <ToggleSwitch />
          <li>
            <button onClick={handleRegisterClick} className="navigation__button">
             Sign Up
            </button>
          </li>
          <li>
            <button className="navigation__button" onClick={handleLoginClick}>
             Log In
            </button>
          </li>
        </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;