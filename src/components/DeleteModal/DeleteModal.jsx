import "./DeleteModal.css";


function DeleteModal ({ isOpen, onClose, itemId, handleDeleteModalSubmit }) {


  return (
    <div className={`modal ${isOpen ? "modal_opened": ""}`}>
      <div className="modal__content modal__content_delete">
        <button className="modal__close" type="button" onClick={onClose}>
          <img src="src\assets\close.svg" alt="Close" />
        </button>
        <p className="delete__text">Are you sure you want to delete this item? This action is irreversible.</p>
        <button className="delete__confirm" type="button" onClick={handleDeleteModalSubmit}>Yes, delete item</button>
        <button className="delete__cancel" type="button" onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}

export default DeleteModal;