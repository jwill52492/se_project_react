import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";

export default function RegisterModal({ onClose, isOpen, onRegisterModalSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatarUrl("");
 }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterModalSubmit({ email, password, name, avatarUrl });
  };

  return (
    <ModalWithForm title="Sign Up" buttonText="Sign Up" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="modal__label" htmlFor="Email">
        Email{" "}
        <input type="email" className="modal__input" id="email" placeholder="Email"
          onChange={(e)=>{setEmail(e.target.value)}} value={email} required
        />
      </label>
      <label className="modal__label" htmlFor="password">
        Password{" "}
        <input type="password" className="modal__input" id="password" placeholder="Password"
          onChange={(e)=>{setPassword(e.target.value)}} value={password} required
        />
      </label>
      <label className="modal__label" htmlFor="name">
        Name{" "}
        <input type="text" className="modal__input" id="name" placeholder="Name"
          onChange={(e)=>{setName(e.target.value)}} value={name} required
        />
      </label>
      <label className="modal__label" htmlFor="avatarUrl">
        avatarUrl{" "}
        <input type="text" className="modal__input" id="avatarUrl" placeholder="Avatar URL"
          onChange={(e)=>{setAvatarUrl(e.target.value)}} value={avatarUrl} required
        />
      </label>
      <button className="login__button" type="button">or Log In</button>
    </ModalWithForm>
  )
}