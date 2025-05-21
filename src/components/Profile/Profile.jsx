import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";


function Profile ({ onCardClick, clothingItems, handleAddClick, handleDeleteClick }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection  clothingItems={clothingItems} onCardClick={onCardClick} handleAddClick={handleAddClick} handleDeleteClick={handleDeleteClick} />
      </section>
    </div>
  );
}

export default Profile