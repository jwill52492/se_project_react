import "./ItemCard.css";

function ItemCard ({ item, onCardClick, onCardLike }) {

  const handleCardClick = () => {
    onCardClick(item);
  }

  const handleLike = () => {
    onCardLike(item);
  }

  const isLiked = item.likes.some(id => id === item._id);
  const itemLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''}`;

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img className="card__image" src={item.imageUrl} alt={item.name} onClick={() => { handleCardClick, handleLike }} />
    </li>
  );
}

export default ItemCard;