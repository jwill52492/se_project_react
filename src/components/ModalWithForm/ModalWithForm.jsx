import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, onClose, isOpen, isDisabled }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose}>
          <img src="src\assets\close.svg" alt="Close" />
        </button>
        <form className="modal__form">
          {children}
          <button className={`modal__submit ${isDisabled && "modal__submit_disabled"}`} disabled={isDisabled} type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;