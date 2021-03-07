import classNames from "classnames";
import PropTypes from 'prop-types';
import { MdDone, MdClear } from "react-icons/md";
import { Button } from "../../components";
import "./Task.scss";

const Task = (props) => {
  return (
    <div
      className="task"
      onDoubleClick={() => props.onToggle(props.task.id)}
    >
      <Button type="icon" onClick={() => props.onComplete(props.task.id)}>
        <MdDone className="task__icon" />
      </Button>
      <div className={classNames(
        "task__content",
        { "task__content--reminder": props.task.reminder }
      )}>
        <h3 className={classNames(
          "task__title",
          { "task__title--completed": props.isCompleted }
        )}>
          {props.task.name}
        </h3>
        <p className="task__date">{props.task.date}</p>
      </div>
      <MdClear className="task__icon task__icon--delete" onClick={() => props.onDelete(props.task.id)} />
    </div>
  )
}

Task.defaultProps = {
  onToggle: () => {},
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  isCompleted: PropTypes.bool,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func,
};

export default Task;
