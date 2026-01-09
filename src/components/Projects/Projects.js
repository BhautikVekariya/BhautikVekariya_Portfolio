import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import billingSystem from "../../Assets/Projects/billingSystem.png";
import Airbnbclone from "../../Assets/Projects/Airbnbclone.png";
import MovieWebsite from "../../Assets/Projects/MovieWebsite.png";
import animation from "../../Assets/Projects/animation.png"
import mediasearch from "../../Assets/Projects/mediasearch.png"

import ochi from "../../Assets/Projects/ochi.png";
import weather from "../../Assets/Projects/weather.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieWebsite}
              isBlog={false}
              title="MovieWebsite"
              description="This project is a movie browsing web application built using React.js. It allows users to explore and search for movies, view detailed information such as synopsis, ratings, and release dates, and manage their favorite movie list."
              ghLink="https://github.com/BhautikVekariya/Movieweb"
              demoLink="https://movieweb-react.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animation}
              isBlog={false}
              title="3d_animation_react"
              description="This project demonstrates a modern 3D website built using React, Three.js, and GSAP. It features interactive 3D models, smooth camera movements, and timeline-based animations to create an engaging user experience. The goal of this project was to explore creative web development techniques, improve performance optimization for 3D content, and understand how animation libraries can be integrated seamlessly with React. The final result is a visually rich, responsive, and scalable web application inspired by award-winning creative studios."
              ghLink="https://github.com/BhautikVekariya/3d_animation_react"
              demoLink="https://3d-animation-react-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mediasearch}
              isBlog={false}
              title="Redux-Project"
              description="A simple Media Search web app built using React and Redux Toolkit that allows users to search and view photos, videos, and GIFs in one place. Users can enter keywords to fetch media content from an external API and view results in a clean, responsive layout."
              ghLink="https://github.com/BhautikVekariya/Redux-project"
              demoLink="https://mediasearch1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={billingSystem}
              isBlog={false}
              title="billingSystem"
              description="A Billing System is a crucial part of Business transactions, ensuring accurate doucmentation of purchases. It generates invoices or receipts for products or services bought by customers."
              ghLink="https://github.com/BhautikVekariya/ochidesing"
              demoLink="https://biling-machine.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ochi}
              isBlog={false}
              title="ochi clone"
              description="The Ochi UI Clone Tech Stack: ,TailwindCSS, React.js & Framer Motion"
              ghLink="https://github.com/BhautikVekariya/ochidesing"
              demoLink="https://sweet-centaur-b0917d.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="weather app"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/BhautikVekariya/weather-app"
              demoLink="https://enchanting-speculoos-b35bbf.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card project-content" >
            <ProjectCard
              imgPath={Airbnbclone}
              isBlog={false}
              title="Airbnbclone"
              description="This project is a modern Airbnb-style web application developed entirely using React.js for the frontend, without using EJS or server-side templating. The platform allows users to explore and book vacation rentals, view property details, and experience an intuitive and responsive interface similar to the original Airbnb platform."
              ghLink="https://github.com/BhautikVekariya/Airlust-website"
              demoLink="https://airlust-website.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
