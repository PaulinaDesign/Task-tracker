import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { Button } from "../../components";

const Header = (props) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{props.title}</h1>
      {location.pathname === "/" &&
        <Button onClick={props.onAdd}>
          {props.showAddForm ? "Close" : "Add"}
        </Button>
      }
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.protoTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func,
  showAddForm: PropTypes.bool,
}

export default Header;