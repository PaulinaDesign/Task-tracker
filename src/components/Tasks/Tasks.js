// import PropTypes from 'prop-types';
import { Task } from "../../components";
import "./Tasks.scss";

const Tasks = (props) => {
  return (
    <section className="tasks">
      <h2>Tasks:</h2>
      {props.tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle} />
      ))}
    </section>
  )
}

// Tasks.propTypes = {

// };

export default Tasks;
