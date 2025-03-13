import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  return (
    <div className="toggle-container">
      <label className="toggle-switch">
      <input type="checkbox" className="toggle-switch__checkbox" />
      <span className="toggle-switch__slider"></span>
      <span className="toggle-switch__label toggle-switch__text_F">°F</span>
      <span className="toggle-switch__label toggle-switch__text_C">°C</span>
    </label>
    </div>
  );
}
