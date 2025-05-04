import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";

export default function EditProfileModal({ onClose, isOpen, onEditProfileSubmit }) {
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    setName("");
    setAvatarUrl("");
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfileSubmit({ name, avatarUrl });
  };

  return (
    <ModalWithForm title="Change profile" buttonText="Save Changes" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="modal__label" htmlFor="name">
        Name{" "}
        <input type="text" className="modal__input" id="name" placeholder="Name"
          onChange={(e)=>{setName(e.target.value)}} value={name} required
        />
      </label>
      <label className="modal__label" htmlFor="avatarUrl">
        Avatar{" "}
        <input type="text" className="modal__input" id="avatarUrl" placeholder="Avatar URL"
          onChange={(e)=>{setAvatarUrl(e.target.value)}} value={avatarUrl} required
        />
      </label>
    </ModalWithForm>
  )
}