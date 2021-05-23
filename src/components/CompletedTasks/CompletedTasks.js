import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button, Task } from "..";
import "./CompletedTasks.scss";

const CompletedTasks = ({ tasks, onComplete, onDelete }) => {
  const [showTasks, setShowTasks] = useState(false);

  return (
    <section>
      <Button type="block" color="blue" onClick={() => { setShowTasks(!showTasks); }}>
        <MdKeyboardArrowDown
          className={classNames(
            "open-complete-button",
            { "open-complete-button--open": showTasks },
          )}
        />
        Completed&nbsp;&nbsp;
        { tasks.length > 0 && tasks.length }
      </Button>
      <div className={classNames(
        "completed-tasks",
        { "completed-tasks--closed": !showTasks },
      )}
      >
        { showTasks && tasks.length > 0
          && tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              isCompleted
              onComplete={onComplete}
              onDelete={onDelete}
              onToggle={() => {}}
            />
          ))}
        { showTasks && tasks.length < 1
          && <p>No completed tasks</p>}
      </div>

    </section>
  );
};

CompletedTasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CompletedTasks;
