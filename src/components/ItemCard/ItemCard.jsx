import "./ItemCard.css";

function ItemCard ({ item, onCardClick, onDeleteClick, card }) {

  const handleCardClick = () => {
    onCardClick(item);
  }

  const handleDeleteClick = () => {
    onDeleteClick(card);
  }

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img className="card__image" src={item.imageUrl} alt={item.name} onClick={handleCardClick} />
    </li>
  );
}

export default ItemCard;