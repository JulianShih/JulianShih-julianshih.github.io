// region 1. Platform Libraries
import React, { useState } from 'react';
// endregion

// region 2. Project Libraries
// endregion

// region U. UI Markups
import './Button.scss';
// endregion


const Button = ({ label, onClick }) => (
  <button className="button" onClick={onClick}>
    <span className="font-h3">{label}</span>
  </button>
);

export default Button;
