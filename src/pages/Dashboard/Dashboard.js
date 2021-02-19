import { useState, useEffect } from "react";
import { AddTask, Tasks, CompletedTasks } from "../../components";
import "./Dashboard.scss";

const Dashboard = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, [])

  // Fetch All Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3008/tasks");
    const data = await res.json();

    return data;
  };

  // Fetch Task
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

    setTasks([...tasks, data]);
  };

  // Complete Task
  const completeTask = async (id) => {
    const taskToComplete = await fetchTask(id);

    await fetch(`http://localhost:3008/tasks/${id}`, {
      method: "DELETE"
    })

    const res = await fetch("http://localhost:3008/completed", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(taskToComplete)
    })

    const data = await res.json();

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3008/tasks/${id}`, {
      method: "DELETE"
    })

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:3008/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json();

    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder: data.reminder } : task)
    );
  };

  return (
    <main className="dashboard">
      <AddTask showAddForm={props.showAddForm} onAdd={addTask} />

      {tasks.length > 0
        ? <Tasks tasks={tasks} onComplete={completeTask} onDelete={deleteTask} onToggle={toggleReminder} />
        : "No tasks"
      }
      <CompletedTasks />
    </main>
  )
}

export default Dashboard;
