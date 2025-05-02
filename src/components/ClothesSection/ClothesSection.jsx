import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection ({ onCardClick, clothingItems, handleAddClick }) {
  const { currentUser } = useContext(CurrentUserContext);
    if (!currentUser) return null;
  const isOwn = card.owner === currentUser._id;
  const itemButtonClassName = (
    `item-modal__delete-button ${isOwn ? 'item-modal__delete-button_visible' : 'item-modal__delete-button_hidden'}`
  );

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
              item={item}
              onCardClick={onCardClick}
            />);
          })}
        </ul>
    </div>
  )
}

export default ClothesSection;