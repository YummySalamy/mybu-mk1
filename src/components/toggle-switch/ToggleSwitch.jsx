import React from 'react';
import './assets/ToggleSwitch.css';

const ToggleSwitch = ({ toggleTheme, currentTheme }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={currentTheme === 'dark'}
        onChange={toggleTheme}
      />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;