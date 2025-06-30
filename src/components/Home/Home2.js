import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container className="container">
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A BRIEF <span className="purple"> INTRODUCTION </span> ABOUT
              MYSELF
            </h1>
            <p className="home-about-body">
              As a{" "}
              <b className="purple">full-stack&nbsp;software&nbsp;engineer</b>{" "}
              and
              <b className="purple"> NLP&nbsp;researcher</b>, I build
              end-to-end, AI-powered products—from sleek{" "}
              <b className="purple">React / Next.js</b> front-ends to scalable{" "}
              <b className="purple">Node.js</b>,{" "}
              <b className="purple">FastAPI</b>, and{" "}
              <b className="purple">Docker</b> micro-services running on
              <b className="purple"> AWS</b>.
              <br />
              <br />
              Recent highlights include a self-hosted text-to-speech platform
              (StyleTTS2), an <i>AI Finance Manager</i>, an autonomous recruiter
              voice agent, and an AI-driven car marketplace—projects that leverage
              <b className="purple"> TypeScript</b>,{" "}
              <b className="purple">Prisma &amp; PostgreSQL</b>,
              <b className="purple"> Supabase</b>,{" "}
              <b className="purple">Inngest</b>, and component libraries like{" "}
              <b className="purple">Tailwind</b> &
              <b className="purple"> Shadcn/UI</b>.
              <br />
              <br />
              My research background in NLP and computer vision has produced peer-reviewed papers at
              <b className="purple"> ACL</b>, <b className="purple">EMNLP</b>,
              and
              <b className="purple"> COLING</b>, exploring multilingual NER,
              summarization, and continual learning with
              <b className="purple"> mBERT</b>.
              <br />
              <br />
              Professionally, I’ve driven impact at numerous companies and startups—migrating PHP/Laravel
              monoliths to modern
              <b className="purple"> React / Node.js</b> stacks, crafting
              engaging
              <b className="purple"> React Native</b> mobile flows, architecting
              <b className="purple"> AWS Amplify + GraphQL</b> back-ends, and
              fine-tuning language models on <b className="purple">Azure CLU</b>
              . Along the way I’ve enforced robust quality with{" "}
              <b className="purple">Jest</b>,<b className="purple"> Cypress</b>,
              and <b className="purple">JMeter</b>, ensuring resilient,
              high-performance systems that now serve thousands of users.
              <br />
              <br />I thrive at the intersection of
              <b className="purple"> Machine Learning</b>,
              <b className="purple"> Product Engineering</b>, and
              <b className="purple"> Scalable Architecture</b>, always eager to
              tackle new challenges and turn ideas into impactful software.
            </p>
          </Col>
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
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
