import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

function ItemCard ({ card, handleCardClick, handleCardLike }) {
  console.log(handleCardClick);
  const currentUser = useContext(CurrentUserContext);
  const isLiked = currentUser?._id && card.likes.some(id => id === currentUser._id);
  const token = localStorage.getItem('jwt');

  const itemLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''}`;
  const handleClick = () => handleCardClick(card);

  return (
    <li className="card">
      <h2 className="card__name">{card.name}
         {token && (<img className="card__like" src="src\assets\heart.svg" alt={itemLikeButtonClassName} onClick={() => handleCardLike({card, isLiked })} />)}
      </h2>
      <img className="card__image" src={card.imageUrl} alt={card.name} onClick={handleClick} />
    </li>
  );
}

export default ItemCard;