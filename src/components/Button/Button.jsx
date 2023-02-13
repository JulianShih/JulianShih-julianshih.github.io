// region 1. Platform Libraries
import React from 'react';
import PropTypes from 'prop-types';
// endregion

// region 2. Project Libraries
// endregion

// region U. UI Markups
import './Button.scss';
// endregion


const Button = ({ label, handleClick }) => (
  <button className="button" onClick={handleClick}>
    <span className="font-h4">{label}</span>
  </button>
);

Button.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func
};

Button.defaultProps = {
  label: 'button'
}

export default Button;
