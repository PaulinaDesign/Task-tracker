import { useState } from "react";
import { Button } from "../../components";
import "./AddTask.scss";

const AddTask = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!name) {
      alert("You forgot to add task name");
      return;
    }

    props.onAdd({ name, date, reminder });

    setName("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="add-form__control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="add-form__control">
        <label>Day & TIme</label>
        <input
          type="text"
          placeholder="Add day & time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="add-form__control">
        <label>Set reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <Button type="block">Save Task</Button>
    </form>
  )
}

export default AddTask;
