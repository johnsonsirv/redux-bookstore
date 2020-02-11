import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => (
  <button className="btn btn-primary btn-lg" onClick={onClick} type="button">
    {text}
  </button>
);
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
