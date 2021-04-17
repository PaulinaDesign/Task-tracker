import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { AddTask, Tasks, CompletedTasks } from "../../components";
import "./Dashboard.scss";

const Dashboard = (props) => {
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();

      setActiveTasks(tasksFromServer.filter((task) => {
        return task.completed === false;
      }));

      setCompletedTasks(tasksFromServer.filter((task) => {
        return task.completed === true;
      }));
    };

    getTasks();
  }, []);

  // Fetch All Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3008/tasks");
    const data = await res.json();

    return data;
  };

  // Fetch Task by ID
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3008/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:3008/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();

    setActiveTasks([...activeTasks, data]);
  };

  // Complete Task
  const completeTask = async (id) => {
    const taskToComplete = await fetchTask(id);
    const taskWithCompletedStatus = {
      ...taskToComplete,
      completed: !taskToComplete.completed,
    };

    const res = await fetch(`http://localhost:3008/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(taskWithCompletedStatus)
    })

    const data = await res.json();

    if (taskToComplete.completed === false) {
      setActiveTasks(activeTasks.filter((task) => task.id !== id));
      setCompletedTasks([...completedTasks, taskToComplete]);
    } else {
      setCompletedTasks(completedTasks.filter((task) => task.id !== id));
      setActiveTasks([...activeTasks, taskToComplete]);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3008/tasks/${id}`, {
      method: "DELETE"
    })

    setActiveTasks(activeTasks.filter((task) => task.id !== id));
    setCompletedTasks(completedTasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);

    if (taskToToggle.date !== "") {
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(`http://localhost:3008/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json();


      taskToToggle.completed === false
        ? setActiveTasks(activeTasks.map((task) => 
            task.id === id ? { ...task, reminder: data.reminder } : task)
          )
        : setCompletedTasks(completedTasks.map((task) => 
            task.id === id ? { ...task, reminder: data.reminder } : task)
          );
    }
    return;
  };

  return (
    <main className="dashboard">
      <div>
        <AddTask showAddForm={props.showAddForm} onAdd={addTask} />

        {activeTasks?.length > 0
          ? <Tasks
              tasks={activeTasks}
              onComplete={completeTask}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          : "No tasks"
        }
      </div>
      <CompletedTasks
        tasks={completedTasks}
        onComplete={completeTask}
        onDelete={deleteTask}
      />
    </main>
  )
}

Dashboard.protoTypes = {
  showAddForm: PropTypes.bool,
};

export default Dashboard;
