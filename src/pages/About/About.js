import { useHistory } from "react-router-dom";
import { Button } from "../../components";
import "./About.scss";

const About = () => {
  const history = useHistory();

  const handleGoBackButton = () => {
    history.push("/task-tracker");
  };

  return (
    <main className="about-container">
      <h2 className="about-container__title">What can you do with Task Tracker?</h2>
      <section className="about-container__section">
        <h3 className="about-container__section-name">
          Add a new task
        </h3>
        <p className="about-container__section-body">
          Add due date to the task and set a reminder for that date. If the date is not selected, checkbox for the reminder is disabled.
        </p>
      </section>
      <section className="about-container__section">
        <h3 className="about-container__section-name">
          Complete a task
        </h3>
        <p className="about-container__section-body">
          Press checkmark button to complete a task. Completed tasks will be transfered to the completed tasks section.
        </p>
        <p className="about-container__section-body">
          You can also bring back already completed tasks to an active section by uncompleting an old task.
        </p>
      </section>
      <section className="about-container__section">
        <h3 className="about-container__section-name">
          Set or remove a reminder
        </h3>
        <p className="about-container__section-body">
          Double click on a task to set or remove a reminder. Only works if the task has a date set.
        </p>
      </section>
      <section className="about-container__section">
        <h3 className="about-container__section-name">
          Delete any task
        </h3>
        <p className="about-container__section-body">
          Press <strong>X</strong> to delete a task.
        </p>
      </section>
      <Button
        type="block"
        color="blue"
        onClick={handleGoBackButton}
      >
        Go back
      </Button>
    </main>
  )
}

export default About;
