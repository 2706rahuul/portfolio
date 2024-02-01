import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rahul Tangsali </span>, based in Los Angeles, CA, USA.
            <br />
            I am currently a first year MS CS grad student at the University of Southern California (USC).
            <br />
            I have completed my Bachelors in Computer Engineering from Pune Institute of Computer Technology, India.
            <br />
            <br />
            Apart from coding and research, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Soccer Gamedays
            </li>
            <li className="about-activity">
              <ImPointRight /> Netflix
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
