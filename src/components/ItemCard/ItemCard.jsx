import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

function ItemCard ({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some(id => id === currentUser._id);
  const token = localStorage.getItem('jwt');

  const handleCardClick = () => {
    onCardClick(item);
  }

  const handleCardLike = () => {
    onCardLike(item)
  }

  const itemLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''}`;

  return (
    <li className="card">
      <h2 className="card__name">{item.name}
         {token && (<img className="card__like" src="src\assets\heart.svg" alt={itemLikeButtonClassName} onClick={handleCardLike} />)}
      </h2>
      <img className="card__image" src={item.imageUrl} alt={item.name} onClick={handleCardClick} />
    </li>
  );
}

export default ItemCard;