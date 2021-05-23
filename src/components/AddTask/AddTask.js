import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import uniqid from "uniqid";
import { MdDone } from "react-icons/md";
import { Button } from "..";
import "./AddTask.scss";

const AddTask = ({ showAddForm, onAdd }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const newId = uniqid();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("You forgot to name your task");
      return;
    }

    onAdd({
      id: newId,
      name,
      date,
      reminder,
      completed: false,
    });

    setName("");
    setDate("");
    setReminder(false);
  };

  return (
    <form
      className={classNames(
        "add-form",
        { "add-form--closed": !showAddForm },
      )}
      onSubmit={onSubmit}
    >
      <h2 className="add-form__title">Add new task</h2>
      <div className="add-form__control">
        {/* eslint-disable-next-line */}
        <label className="add-form__label">
          Task name
        </label>
        <input
          className="add-form__input"
          type="text"
          placeholder="Task name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="add-form__control">
        {/* eslint-disable-next-line */}
        <label className="add-form__label">
          Due date
        </label>
        <input
          className="add-form__input"
          type="date"
          placeholder="Add due date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="add-form__control">
        {/* eslint-disable-next-line */}
        <label id="checkbox" className="add-form__checkbox">
          <input
            className="add-form__checkbox-input"
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
            disabled={date === ""}
          />
          {/* eslint-disable-next-line */}
          <span className="add-form__checkbox-fakebox" tabIndex="0">
            <MdDone className="add-form__fakebox-icon" />
          </span>
          <span className="add-form__label">Set Reminder</span>
        </label>
      </div>

      <Button type="block">Save Task</Button>
    </form>
  );
};

AddTask.defaultProps = {
  showAddForm: false,
  onAdd: () => {},
};

AddTask.propTypes = {
  showAddForm: PropTypes.bool,
  onAdd: PropTypes.func,
};

export default AddTask;
