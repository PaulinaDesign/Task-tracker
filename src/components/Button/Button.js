import PropTypes from 'prop-types';
import classNames from "classnames";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      className={classNames(
        "button",
        { [`button--${props?.type}`]: props?.type },
        { "button--open": props?.isOpen }
      )}
      onClick={props.onClick}>
        {props.children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default Button;
