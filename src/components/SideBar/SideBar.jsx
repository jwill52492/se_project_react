import "./SideBar.css";
import avatar from "../../assets/avatar.svg";
import { useReducer } from "react";

function SideBar ({handleSignOutClick, handleEditClick}) {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img className="sidebar__avatar" src={avatar} alt="default avatar" />
        <p className="sidebar__username">Johnnathon Williams</p>
      </div>
      <div className="sidebar__buttons">
        <button className="sidebar__button" type="button" onClick={handleEditClick}>Change Profile Data</button>
        <button className="sidebar__button" type="button" onClick={handleSignOutClick}>Sign Out</button>
      </div>
    </div>
  );
}

export default SideBar;