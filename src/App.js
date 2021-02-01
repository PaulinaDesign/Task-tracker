import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About, AddTask, Footer, Header, Tasks} from "./components";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
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

    console.log(updTask);
  };

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddForm(!showAddForm)} showAddForm={showAddForm} />
        <Route path="/" exact render={(props) => (
          <>
            {showAddForm &&
              <AddTask onAdd={addTask} />
            }
            {tasks.length > 0
              ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
              : "No tasks"
            }
          </>
        )} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;