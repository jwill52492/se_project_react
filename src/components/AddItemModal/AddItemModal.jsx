import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

export default function AddItemModal({ onClose, isOpen, onAddItemModalSubmit }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [temp, setTemp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit({ name, imageUrl, temp });
    setName("");
    setImageUrl("");
    setTemp("");
  };

  return (
    <ModalWithForm title="New garment" buttonText="Add garment" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="modal__label" htmlFor="name" onChange={(e)=>{setName(e.target.value)}} value={name}>
        Name{" "}
        <input type="text" className="modal__input" id="name" placeholder="Name" required />
      </label>
      <label className="modal__label" htmlFor="imageUrl" onChange={(e)=>{setImageUrl(e.target.value)}} value={imageUrl}>
        Image{" "}
        <input type="text" className="modal__input" id="imageUrl" placeholder="Image URL" required />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label modal__label_type_radio" onChange={(e)=>{setTemp(e.target.value)}} value="hot"
          checked={temp === "hot"}>
          <input type="radio" className="modal__radio-input" id="hot" name="temp" required />
            Hot
        </label>
        <label className="modal__label modal__label_type_radio" onChange={(e)=>{setTemp(e.target.value)}} value="warm"
          checked={temp === "warm"}>
          <input type="radio" className="modal__radio-input" id="warm" name="temp" required />
           Warm
        </label>
        <label className="modal__label modal__label_type_radio" onChange={(e)=>{setTemp(e.target.value)}} value="cold"
          checked={temp === "cold"}>
          <input type="radio" className="modal__radio-input" id="cold" name="temp" required />
            Cold
        </label>
      </fieldset>
    </ModalWithForm>
  )
}