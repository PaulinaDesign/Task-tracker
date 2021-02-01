import { useState } from "react";
import { AddTask, Header, Tasks} from "./components";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Dentist Appointment",
      date: "Feb 5th 14:30",
      reminder: true,
    },
    {
      id: 2,
      name: "Meeting with Client",
      date: "Feb 6th 12:00",
      reminder: true,
    },
    {
      id: 3,
      name: "Shopping",
      date: "Feb 5th 18:00",
      reminder: false,
    }
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = {
      id,
      ...task
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = id => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = id => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task));
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddForm(!showAddForm)} showAddForm={showAddForm} />
      {showAddForm &&
        <AddTask onAdd={addTask} />
      }
      {tasks.length > 0
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : "No tasks"
      }
    </div>
  );
}

export default App;
