import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";

export default function RegisterModal({ onClose, isOpen, onRegisterModalSubmit, switchToLogin }) {
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
        AvatarURL{" "}
        <input type="text" className="modal__input" id="avatarUrl" placeholder="Avatar URL"
          onChange={(e)=>{setAvatarUrl(e.target.value)}} value={avatarUrl} required
        />
      </label>
      <div className="button__container">
        <button type="submit" className="modal__submit" disabled={!email || !password || !name || !avatarUrl}>Sign Up </button>
        <button className="login__button" type="submit" onClick={switchToLogin}>or Log In</button>
      </div>
    </ModalWithForm>
  )
}