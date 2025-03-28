import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";


function Profile ({ onCardClick, clothingItems, onAddClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection  clothingItems={clothingItems} onCardClick={onCardClick} onAddClick={onAddClick} />
      </section>
    </div>
  );
}

export default Profile