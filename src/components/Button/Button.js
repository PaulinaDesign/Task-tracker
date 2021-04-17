import PropTypes from 'prop-types';
import classNames from "classnames";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      className={classNames(
        "button",
        { [`button--${props?.type}`]: props?.type },
        { [`button--${props?.color}`]: props?.color },
        { "button--open": props?.isOpen }
      )}
      onClick={props.onClick}>
        {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default Button;
