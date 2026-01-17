import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center", lineHeight: "1.7" }}>
            <strong style={{ fontSize: "1.4rem"}} >Hello, I’m <span style={{color: "#c66df0" }}>  Bhautik Vekariya</span></strong>
            <br /><br />

            I’m a passionate Full Stack Developer skilled in
            <strong style={{color: "#c66df0" }}> HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS, and Python, Django.</strong>
            <br /><br />

            I recently completed my B.E. in Information Technology and also completed a Python Full Stack Development course at IT Vedant, where I learned backend API development, database handling, ORM concepts, and modern frontend development using HTML, CSS, JavaScript, React.js, Bootstrap, and Tailwind CSS.
            <br /><br />

            I love creating responsive, modern, and user-friendly web applications and enjoy
            working on full-stack projects that bring ideas to life.
            <br /><br />

            <strong style={{color:"#c66df0"}}> Let’s connect and create something amazing together!</strong>
          </p>


          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Bhautik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
