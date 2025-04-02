import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

function SideBar () {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img className="sidebar__avatar" src={avatar} alt="default avatar" />
        <p className="sidebar__username">Johnnathon Williams</p>
      </div>
    </div>
  );
}

export default SideBar;