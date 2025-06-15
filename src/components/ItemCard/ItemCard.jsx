import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import heart from "../../assets/heart.svg";
import heartf from "../../assets/heartf.svg";
import "./ItemCard.css";

function ItemCard ({ card, handleCardClick, handleCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = currentUser?._id && card.likes.includes(currentUser._id);
  const token = localStorage.getItem('jwt');

  const itemLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''}`;
  const heartIcon = isLiked ? heartf : heart;
  const handleClick = () => handleCardClick(card);

  return (
    <li className="card">
      <h2 className="card__name">{card.name}
         {token && (<img className="card__like" src={heartIcon} alt={itemLikeButtonClassName} onClick={() => handleCardLike({ card, isLiked })} />)}
      </h2>
      <img className="card__image" src={card.imageUrl} alt={card.name} onClick={handleClick} />
    </li>
  );
}

export default ItemCard;