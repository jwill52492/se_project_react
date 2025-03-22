import { Link } from 'react-router-dom';
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>

      <p className="header__date-and-location">{currentDate}, {weatherData.city}</p>
      <ToggleSwitch />
      <button className="header__add-clothes-button" type="button" onClick={handleAddClick}>+ Add Clothes</button>
      <div className="header__user-container">
        <Link to="/profile" className="profile__link">
          <p className="header__username">Johnnathon Williams</p>
          <img className="header__avatar" src={avatar} alt="John" />
        </Link>
      </div>
    </header>
  );
}

export default Header;