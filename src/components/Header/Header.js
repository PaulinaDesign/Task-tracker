import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
import { MdClear } from "react-icons/md";
import { Button } from "../../components";
import "./Header.scss";

const Header = (props) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1 className="header__title">{props.title}</h1>
      {location.pathname === "/task-tracker" &&
        <Button className="header__button" onClick={props.onAdd} isOpen={props.showAddForm}>
          <MdClear className={`button__icon ${!props.showAddForm ? "button__icon--open" : ""}`} />
          {props.showAddForm ? "Close" : "Add New Task"}
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
