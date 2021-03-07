import { useState } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import { Button, Task } from "../../components";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./CompletedTasks.scss";

const CompletedTasks = (props) => {
  const [showTasks, setShowTasks] = useState(false);

  return (
    <section>
      <Button type="block" color="blue" onClick={() => {setShowTasks(!showTasks)}} >
        <MdKeyboardArrowDown
          className={classNames(
            "open-complete-button",
            { "open-complete-button--open": showTasks }
          )}
        />
        Completed&nbsp;&nbsp;
        { props.tasks.length > 0 && props.tasks.length }
      </Button>
      <div className={classNames(
        "completed-tasks",
        { "completed-tasks--closed": !showTasks }
      )}>
        { showTasks && props.tasks.length > 0 &&
          props.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              isCompleted={true}
              onComplete={props.onComplete}
              onDelete={props.onDelete}
              onToggle={() => {}}
            />
          ))
        }
        { showTasks && props.tasks.length < 1 &&
          <p>No completed tasks</p>
        }
      </div>
      
    </section>
  )
}

CompletedTasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CompletedTasks;
