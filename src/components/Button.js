import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button classname="button" onClick={props.onClick}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};


export default Button;
