import PropTypes from 'prop-types';
import "./Button.scss";

const Button = (props) => {
  return (
    <button className={`button ${props.children === "Close" ? "button--open" : ""}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
};


export default Button;
