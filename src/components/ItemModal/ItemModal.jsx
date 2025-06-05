import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemModal.css";
import "../ModalWithForm/ModalWithForm.css";

const ItemModal = ({ isOpen, onClose, card, handleDeleteClick }) => {
  const { currentUser } = useContext(CurrentUserContext);
  if (!card) return null;

  const isOwn = currentUser ? card.owner === currentUser._id : false;
  const itemDeleteButtonClassName = `item-modal__delete-button ${isOwn ? 'item-modal__delete-button_visible' : 'item-modal__delete-button_hidden'}`;

  function handleDelete() {
    handleDeleteClick(card);
  }

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button className="modal__close" type="button" onClick={onClose}>
          <img src="src/assets/close.svg" alt="Close" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer_text">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          {isOwn && (
            <button className={itemDeleteButtonClassName} type="button" onClick={handleDelete}>
              Delete Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
