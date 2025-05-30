import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";


function Profile ({ handleCardClick, clothingItems, handleAddClick, handleDeleteClick, handleEditProfileClick, handleSignOutClick, handleCardLike, handleRemoveCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar handleEditProfileClick={handleEditProfileClick} handleSignOutClick={handleSignOutClick}/>
      </section>
      <section className="profile__clothing-items">
        <ClothesSection  clothingItems={clothingItems} handleCardClick={handleCardClick} handleAddClick={handleAddClick} handleDeleteClick={handleDeleteClick} />
      </section>
    </div>
  );
}

export default Profile