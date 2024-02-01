import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container className="container">
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              As a current MS CS student at USC, my focus has been on conducting research in <b className="purple">Natural Language Processing (NLP)</b> and <b className="purple">Computer Vision (CV)</b>.
              <br />
              <br />I have a robust research background, with papers published at conferences like
              <b className="purple"> ACL, EMNLP </b> and <b className="purple"> COLING</b>. 
          

              <br />
              <br />
              My field of Interest's are &nbsp;
                <b className="purple">Machine Learning, Natural Language Processing, Computer Vision </b> and
                also in areas related to{" "}
                <b className="purple">Data Science</b> and <b className="purple">Software Development</b>. 
                
              <br />
              <br />
              My tech stack experience includes working extensively with <b className="purple">Python</b>, <b className="purple">TensorFlow</b>, <b className="purple">PyTorch</b>, <b className="purple">SQL</b> and <b className="purple">C++</b>. 
              
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rahuul2001"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://scholar.google.com/citations?hl=en&authuser=1&user=q2hk-AQAAAAJ"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGooglescholar />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rahul-tangsali/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rahuul_2706/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
