import React from "react";
import PropTypes from "prop-types";
import { Task } from "..";
import "./Tasks.scss";

const Tasks = ({
  tasks, onComplete, onDelete, onToggle,
}) => (
  <section className="tasks">
    <h2>Tasks</h2>
    {tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        isCompleted={false}
        onComplete={onComplete}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    ))}
  </section>
);

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Tasks;
