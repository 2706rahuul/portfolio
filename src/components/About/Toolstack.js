import React from "react";
import { Col, Row } from "react-bootstrap";

/* developer, DevOps & cloud tools */
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiDocker,
  SiGooglecloud,
  SiFirebase,
  SiAmazonaws,
  SiMacos,
} from "react-icons/si";
import {
  FaGithub,
  FaLinux,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* OS & Source Control */}
      <Col xs={4} md={2} className="tech-icons"><SiMacos /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaLinux /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaGithub /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaGitAlt /></Col>

      {/* IDE / Collaboration */}
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSlack /></Col>

      {/* Hosting / DevOps */}
      <Col xs={4} md={2} className="tech-icons"><SiVercel /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaAws /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAmazonaws /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGooglecloud /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col>
    </Row>
  );
}

export default Toolstack;
