//import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection ({ onCardClick, clothingItems }) {
  return (
    <div className="clothes-section">
      <div>
        <p>Your Items</p>
        <button>+ Add New</button>
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