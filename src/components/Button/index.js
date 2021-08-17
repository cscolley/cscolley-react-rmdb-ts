import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ text, calllback }) => (
  <Wrapper type="button" onClick={calllback}>
    {text}
  </Wrapper>
);

Button.propTypes = {
  text: PropTypes.string,
  calllback: PropTypes.func,
};

export default Button;
