import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";


function Profile ({ onCardClick, clothingItems, handleAddClick, handleDeleteClick }) {
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