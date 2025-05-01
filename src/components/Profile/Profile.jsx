import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";


function Profile ({ onCardClick, clothingItems, handleAddClick, handleDeleteClick, handleSignOut }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection  clothingItems={clothingItems} onCardClick={onCardClick} handleAddClick={handleAddClick} handleDeleteClick={handleDeleteClick} />
      </section>
      <button onClick={onSignOut}>Sign Out</button>
    </div>
  );
}

export default Profile