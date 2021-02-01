import { FaTimes } from "react-icons/fa";
import "./Task.scss";

const Task = (props) => {
  return (
    <div className={`task ${props.task.reminder ? "task--reminder" : ""}`} onDoubleClick={() => props.onToggle(props.task.id)}>
      <h3>{props.task.name}
        <FaTimes className="task__delete-icon" onClick={() => props.onDelete(props.task.id)} />
      </h3>
      <p>{props.task.date}</p>
    </div>
  )
}

export default Task;
