import PropTypes from 'prop-types';
import Button from "./Button";

const Header = (props) => {
  const onClick = () => {
    alert("You clicked me");
  };

  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button onClick={onClick}>Add</Button>
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.protoTypes = {
  title: PropTypes.string,
}

export default Header;
