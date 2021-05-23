import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { MdClear } from "react-icons/md";
import { Button } from "..";
import "./Header.scss";

const Header = ({ title, onAdd, showAddForm }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      {location.pathname === "/"
        && (
          <Button
            className="header__button"
            onClick={onAdd}
            type="text"
            isOpen={showAddForm}
          >
            <div className={classNames(
              "button__icon-container",
              { "button__icon-container--open": showAddForm },
            )}
            >
              <MdClear className={classNames(
                "button__icon",
                { "button__icon--open": !showAddForm },
              )}
              />
            </div>
            {showAddForm ? "Close" : "Add Task"}
          </Button>
        )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
  onAdd: () => {},
  showAddForm: false,
};

Header.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func,
  showAddForm: PropTypes.bool,
};

export default Header;
