import { useContext } from "react";
import "./ItemCard.css";

function ItemCard ({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some(id => id === currentUser._id);
  const token = localStorage.getItem('jwt');

  const handleCardClick = () => {
    onCardClick(item);
  }

  const handleCardLikeClick = () => {
    onCardLike(item, isLiked);
  }

  const itemLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''}`;

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      {token && (<img className="card__like" src="src\assets\heart.svg" alt={itemLikeButtonClassName} onClick={handleCardLikeClick} />)}
      <img className="card__image" src={item.imageUrl} alt={item.name} onClick={handleCardClick} />
    </li>
  );
}

export default ItemCard;