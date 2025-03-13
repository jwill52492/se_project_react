import {useContext} from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <div className="toggle-container">
      <label className="toggle-switch">
        <input type="checkbox" className="toggle-switch__checkbox" onChange={handleToggleSwitchChange} />
        <span className="toggle-switch__slider"></span>
        <span className={`toggle-switch__text toggle-switch__text_F
         ${currentTemperatureUnit === "F" ? "toggle-switch__text_color_white" : ""}`}>°F</span>
        <span className={`toggle-switch__text toggle-switch__text_C
         ${currentTemperatureUnit === "C" ? "toggle-switch__text_color_white" : ""}`}>°C</span>
      </label>
    </div>
  );
}
