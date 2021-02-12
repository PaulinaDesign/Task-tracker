import PropTypes from 'prop-types';
import "./Button.scss";

const Button = (props) => {
  return (
    <button className={`button ${props.isOpen ? "button--open" : ""}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};


export default Button;
