import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { MdDone, MdClear } from "react-icons/md";
import { Button } from "..";
import "./Task.scss";

const Task = ({
  task, isCompleted, onComplete, onDelete, onToggle,
}) => (
  <div
    className="task"
    onDoubleClick={() => onToggle(task.id)}
  >
    <Button type="icon" onClick={() => onComplete(task.id)}>
      <MdDone className="task__icon" />
    </Button>
    <div className={classNames(
      "task__content",
      { "task__content--reminder": task.reminder },
    )}
    >
      <h3 className={classNames(
        "task__title",
        { "task__title--completed": isCompleted },
      )}
      >
        {task.name}
      </h3>
      <p className="task__date">{task.date}</p>
    </div>
    <MdClear className="task__icon task__icon--delete" onClick={() => onDelete(task.id)} />
  </div>
);

Task.defaultProps = {
  onToggle: () => {},
  isCompleted: false,
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  isCompleted: PropTypes.bool,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func,
};

export default Task;
