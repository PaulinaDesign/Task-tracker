import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Button.scss";

const Button = ({
  children, onClick, type, color, isOpen,
}) => (
  <button
    className={classNames(
      "button",
      { [`button--${type}`]: type },
      { [`button--${color}`]: color },
      { "button--open": isOpen },
    )}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: "",
  color: "",
  isOpen: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default Button;
