import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection ({ handleCardClick, handleCardLike, clothingItems, handleAddClick }) {
  const { currentUser } = useContext(CurrentUserContext);
  const userCards = clothingItems.filter((card) => card.owner === currentUser?._id)

  return (
    <div className="clothes-section">
      <div className="clothes-section__text">
        <p className="clothes-section__your">Your Items</p>
        <button className="clothes-section__button" type="button" onClick={handleAddClick}>+ Add new</button>
      </div>
      <ul className="clothes-section__items">
          {clothingItems.map((item) => {
            return (<ItemCard
              key={item._id}
              card={item}
              handleCardClick={handleCardClick}
              handleCardLike={handleCardLike}
            />);
          })}
        </ul>
    </div>
  )
}

export default ClothesSection;