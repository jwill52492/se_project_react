//import { defaultClothingItems } from "../../utils/constants";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection ({ onCardClick, clothingItems, handleAddClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__text">
        <p className="clothes-section__your">Your Items</p>
        <button className="clothes-section__button" type="button" onClick={handleAddClick}>+ Add new</button>
      </div>
      <ul className="clothes-section__items">
          {clothingItems.map((item) => {
            return <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
            />
          })}
        </ul>
    </div>
  )
}

export default ClothesSection;