// Input.js
import React from 'react';

const Input = ({ type, value, onChange, placeholder, min }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      className="input"
    />
  );
};

export default Input;