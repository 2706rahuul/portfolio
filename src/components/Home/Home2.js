import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.4em" }}>
              BUILDING <span className="purple">SOFTWARE &amp; INTELLIGENT SYSTEMS</span>
            </h1>
            <p className="home-about-body">
              I'm currently working as a <b className="purple">Founding Software Engineer at OneHermes</b> and am a M.S. Computer Science graduate from the University of Southern California (USC). I build production-ready full-stack
              applications and AI systems, from healthcare and workforce platforms to
              agentic assistants and retrieval-augmented generation.
              <br /><br />
              At <b className="purple">OneHermes</b>, I've shipped over 300 features,
              improvements, and fixes across scheduling, attendance, time off, and
              patient-care workflows, including electronic visit verification (EVV)
              integrations. Previously, at <b className="purple">USC</b>, I helped
              build <b className="purple">Tommy</b>, an immigration information
              assistant handling more than 2,000 student queries each month.
              <br /><br />
              My recent AI work includes <b className="purple">MedAssist AI</b>,
              an eight-tool agentic assistant; a document research assistant with
              multi-stage RAG; and research on continual learning for multilingual
              named entity recognition.
            </p>
            <div className="home-quick-links">
              <Link className="portfolio-link-primary" to="/projects">Explore projects</Link>
              <Link className="portfolio-link-secondary" to="/resume">View both resumes</Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <ul className="home-about-social-links">
              <li className="social-icons"><a href="https://github.com/rahuul2001" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-colour home-social-icons"><AiFillGithub /></a></li>
              <li className="social-icons"><a href="https://scholar.google.com/citations?hl=en&authuser=1&user=q2hk-AQAAAAJ" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" className="icon-colour home-social-icons"><SiGooglescholar /></a></li>
              <li className="social-icons"><a href="https://www.linkedin.com/in/rahul-tangsali/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-colour home-social-icons"><FaLinkedinIn /></a></li>
              <li className="social-icons"><a href="mailto:rahuul2001@gmail.com" aria-label="Email" className="icon-colour home-social-icons"><AiOutlineMail /></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
