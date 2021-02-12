import { MdDone, MdClear } from "react-icons/md";
import "./Task.scss";

const Task = (props) => {
  return (
    <div className={`task ${props.task.reminder ? "task--reminder" : ""}`} onDoubleClick={() => props.onToggle(props.task.id)}>
      <h3 className="task__title">
        {props.task.name}
        <div className="task__controls">
          <MdDone className="task__icon" onClick={() => props.onDelete(props.task.id)} />
          <MdClear className="task__icon" onClick={() => props.onDelete(props.task.id)} />
        </div>
      </h3>
      <p className="task__date">Deadline: {props.task.date}</p>
    </div>
  )
}

export default Task;
