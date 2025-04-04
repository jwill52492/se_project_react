import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card, onDeleteClick }) {
  function handleDeleteClick() {
    onDeleteClick(card);
  }
  return (
    <div className={`modal ${isOpen ? "modal_opened": ""}`}>
      <div className={"modal__content modal__content_type_image"}>
        <button className="modal__close" type="button" onClick={onClose}>
          <img src="src\assets\close.svg" alt="Close" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer_text">
            <h2 className="modal__caption" >{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button className="item-modal__delete-button" type="button" onClick={handleDeleteClick}>
            Delete Item
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemModal;