// import PropTypes from 'prop-types';
import { Task } from "../../components";

const Tasks = (props) => {
  return (
    <>
      <h2>Tasks:</h2>
      {props.tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle} />
      ))}
    </>
  )
}

// Tasks.propTypes = {

// };

export default Tasks;
