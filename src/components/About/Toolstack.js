import React from "react";
import { Row, Col } from "react-bootstrap";

const TOOL_GROUPS = [
  { title: "Cloud & Deployment", items: ["AWS", "Google Cloud", "Vercel", "Railway", "Docker"] },
  { title: "Development", items: ["Git", "GitHub", "Postman", "VS Code", "Linux"] },
];

function Toolstack() {
  return (
    <Row className="skill-grid">
      {TOOL_GROUPS.map((group) => (
        <Col key={group.title} md={6} className="skill-grid-column">
          <section className="skill-group">
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}
            </div>
          </section>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
