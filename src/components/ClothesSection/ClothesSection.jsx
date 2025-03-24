//import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection ({ onCardClick, clothingItems }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__text">
        <p className="clothes-section_your">Your Items</p>
        <button className="clothes-section__button">+ Add New</button>
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