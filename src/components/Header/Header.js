import PropTypes from 'prop-types';
import classNames from "classnames";
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
        <Button
          className="header__button"
          onClick={props.onAdd}
          type="text"
          isOpen={props.showAddForm}
        >
          <div className={classNames(
              "button__icon-container",
              { "button__icon-container--open" : props.showAddForm }
            )}>
            <MdClear className={classNames(
              "button__icon",
              { "button__icon--open" : !props.showAddForm }
            )}/>
          </div>
          {props.showAddForm ? "Close" : "Add Task"}
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
};

export default Header;
