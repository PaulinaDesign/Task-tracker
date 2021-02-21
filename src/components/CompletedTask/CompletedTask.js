import classNames from "classnames";
import { MdDone, MdClear } from "react-icons/md";
import { Button } from "../../components";
import "./CompletedTask.scss";

const CompletedTask = (props) => {
  return (
    <div className="task">
      <Button type="icon" onClick={() => props.onComplete(props.task.id)}>
        <MdDone className="task__icon" />
      </Button>
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

export default CompletedTask;
