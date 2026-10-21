import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            I'm Rahul Tangsali, a USC M.S. Computer Science graduate and
            full-stack software engineer with a research background in NLP.
            I enjoy working on useful products at the intersection of
            software engineering and applied machine learning.
          </p>
          <ul>
            <li className="about-activity"><ImPointRight /> Tennis</li>
            <li className="about-activity"><ImPointRight /> Soccer</li>
            <li className="about-activity"><ImPointRight /> Films &amp; TV</li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
