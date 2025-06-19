import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";

export default function AddItemModal({ onClose, isOpen, handleAddItemModalSubmit }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [temp, setTemp] = useState("");

  useEffect(() => {
    setName("");
    setImageUrl("");
    setTemp("");
 }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItemModalSubmit({ name, imageUrl, temp });
    // setName("");
    // setImageUrl("");
    // setTemp("");
  };

  return (
    <ModalWithForm title="New garment" buttonText="Add garment" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="modal__label" htmlFor="name">
        Name{" "}
        <input type="text" className="modal__input" id="name" placeholder="Name"
          onChange={(e)=>{setName(e.target.value)}} value={name} required
        />
      </label>
      <label className="modal__label" htmlFor="imageUrl">
        Image{" "}
        <input type="text" className="modal__input" id="imageUrl" placeholder="Image URL"
          onChange={(e)=>{setImageUrl(e.target.value)}} value={imageUrl}required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label modal__label_type_radio">
          <input type="radio" className="modal__radio-input" id="hot" name="temp"
            onChange={(e)=>{setTemp(e.target.value)}} value="hot" checked={temp === "hot"}required />
            Hot
        </label>
        <label className="modal__label modal__label_type_radio" >
          <input type="radio" className="modal__radio-input" id="warm" name="temp"
            onChange={(e)=>{setTemp(e.target.value)}} value="warm" checked={temp === "warm"} required />
           Warm
        </label>
        <label className="modal__label modal__label_type_radio">
          <input type="radio" className="modal__radio-input" id="cold" name="temp"
            onChange={(e)=>{setTemp(e.target.value)}} value="cold" checked={temp === "cold"} required />
            Cold
        </label>
      </fieldset>
      <button type="submit" className="modal__submit" disabled={!name || !imageUrl || !temp}>Add garment</button>
    </ModalWithForm>
  )
}