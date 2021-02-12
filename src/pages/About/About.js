import { Link } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <main className="about-container">
      <h4>Version 1.0.0</h4>
      <Link to="/task-tracker">Go back</Link>
    </main>
  )
}

export default About;
