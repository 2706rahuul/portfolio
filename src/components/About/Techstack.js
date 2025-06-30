import React from "react";
import { Col, Row } from "react-bootstrap";

/* ---------------  Language icons --------------- */
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";

/* ---------------  Simple-Icons set --------------- */
import {
  /* core languages */
  SiTypescript,
  SiSwift,

  /* front-end & styling */
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiRedux,

  /* back-end & API */
  SiExpress,
  SiDjango,
  SiFlask,
  SiGraphql,
  SiSocketdotio,

  /* testing  */
  SiJest,
  SiCypress,
  SiApachejmeter,

  /* dev-platforms / BaaS */
  SiFirebase,
  SiAwsamplify,
  SiAppwrite,
  SiWordpress,

  /* databases & ORMs */
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiAmazondynamodb,
  SiPrisma,
  SiSequelize,
  SiHasura,

  /* ML / data */
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiStreamlit,

  /* cloud / misc */
  SiMicrosoftazure,
  SiPowerbi,
} from "react-icons/si";

/* ---------------  Font-Awesome extras --------------- */
import {
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* -------- Languages -------- */}
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTypescript /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSwift /></Col>

      {/* -------- Front-end -------- */}
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAngular /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaBootstrap /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><FaCss3Alt /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiRedux /></Col>

      {/* -------- Back-end / APIs -------- */}
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiExpress /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDjango /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFlask /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGraphql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSocketdotio /></Col>

      {/* -------- Testing -------- */}
      <Col xs={4} md={2} className="tech-icons"><SiJest /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCypress /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiApachejmeter /></Col>

      {/* -------- Databases / ORMs -------- */}
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSqlite /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAmazondynamodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPrisma /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSequelize /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiHasura /></Col>

      {/* -------- ML / Data Science -------- */}
      <Col xs={4} md={2} className="tech-icons"><SiPytorch /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiScikitlearn /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiOpencv /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiStreamlit /></Col>

      {/* -------- Platforms / BaaS -------- */}
      <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAwsamplify /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAppwrite /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiWordpress /></Col>

      {/* -------- Misc -------- */}
      <Col xs={4} md={2} className="tech-icons"><SiMicrosoftazure /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPowerbi /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
    </Row>
  );
}

export default Techstack;
