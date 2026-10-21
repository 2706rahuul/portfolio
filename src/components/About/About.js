import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">About <strong className="purple">Me</strong></h1>
        <p className="section-intro">
          I'm a USC M.S. Computer Science graduate (May 2025) and a software engineer
          working across full-stack systems, applied AI, NLP, and healthcare technology.
          I earned my B.E. in Computer Engineering from Pune Institute of Computer Technology in 2023.
        </p>
        <h2 className="project-heading">Technical <strong className="purple">Skills</strong></h2>
        <Techstack />
        <h2 className="project-heading">Cloud &amp; <strong className="purple">Developer Tools</strong></h2>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
