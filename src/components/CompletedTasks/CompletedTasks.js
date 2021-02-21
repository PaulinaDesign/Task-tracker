import { useState, useEffect } from "react";
import classNames from "classnames";
import { Button, CompletedTask } from "../../components";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./CompletedTasks.scss";

const CompletedTasks = (props) => {
  const [completedTasks, setCompleteedTasks] = useState([]);
  const [showTasks, setShowTasks] = useState(false);


  useEffect(() => {
    const getCompletedTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setCompleteedTasks(tasksFromServer);
    };

    getCompletedTasks();
  }, [])

  // Fetch All Completed Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3008/completed");
    const data = await res.json();

    return data;
  };

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
        { completedTasks.length > 0 && completedTasks.length }
      </Button>
      <div className="completed-tasks">
        { showTasks && completedTasks.length > 0 &&
          completedTasks.map((task) => (
            <CompletedTask
              key={task.id}
              task={task}
            />
          ))
        }
        { showTasks && completedTasks.length < 1 &&
          <p>No completed tasks</p>
        }
      </div>
      
    </section>
  )
}

export default CompletedTasks;
