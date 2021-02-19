import classNames from "classnames";
import { MdDone, MdClear } from "react-icons/md";
import "./Task.scss";

const Task = (props) => {
  return (
    <div
      className="task"
      onDoubleClick={() => props.onToggle(props.task.id)}
    >
      <MdDone className="task__icon task__icon--complete" onClick={() => props.onDelete(props.task.id)} />
      <div className={classNames(
        "task__content",
        { "task__content--reminder": props.task.reminder }
      )}>
        <h3 className="task__title">{props.task.name}</h3>
        <p className="task__date">{props.task.date}</p>
      </div>
      <MdClear className="task__icon task__icon--delete" onClick={() => props.onDelete(props.task.id)} />
    </div>
  )
}

export default Task;
