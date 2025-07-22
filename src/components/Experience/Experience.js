import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  // ✨ Central place to manage or extend your work-experience data
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Sumeru Inc.",
      location: "Los Angeles, CA",
      duration: "January 2025 – May 2025",
      bullets: [
        "Engineered full-stack development for the JVA website, delivering a unified Next.js front-end backed by Node.js and Sequelize (MySQL).",
        "Migrated a legacy PHP + React system to a modern Node.js + Next.js stack, boosting scalability for 25K monthly active users.",
        "Leveraged AWS RDS to ensure high availability and improved query performance.",
        "Authored Jest/Cypress suites and JMeter/Postman tests to catch regressions and performance bottlenecks.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Sara Technology Inc.",
      location: "Los Angeles, CA",
      duration: "May 2024 – December 2024",
      bullets: [
        "Built React Native onboarding and practice pages with rich animations and audio, rolled out to 3 schools and 5 therapists in 2 months.",
        "Built a secure AWS Amplify–powered GraphQL backend and an ML-driven authentication pipeline, accelerating logins while enhancing therapy accuracy and user engagement.",
        "Enhanced the marketing site (React, Next.js, TypeScript), helping the product win a Columbia Business School grant.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Redvest",
      location: "Remote · Los Angeles, CA",
      duration: "May 2024 – August 2024",
      bullets: [
        "Led full-stack delivery of Bankzzz marketplace, converting Wix mock-ups into React components with 98 % pixel accuracy.",
        "Built Firebase + Express.js auth APIs and Venmo payments, scaling to 1.2 K daily transactions.",
        "Automated SendGrid notifications, slashing response time for marketing to potential customers.",
        "Contributed key features that helped Redvest reach 150 K users and a Top 30 Finance-app App Store ranking.",
      ],
    },
    {
      title: "Researcher",
      company: "USC Information Sciences Institute",
      location: "Remote · Los Angeles, CA",
      duration: "September 2023 – February 2024",
      bullets: [
        "Collaborated with Prof. Benjamin Nye on automated college-essay scoring research.",
        "Designed ChatGPT-3.5 prompt-engineering baselines for rubric-based issue detection.",
        "Authored a Python pipeline to auto-generate and score prompts via the ChatGPT API.",
      ],
    },
    {
      title: "Project Intern",
      company: "L3Cube Pune",
      location: "Pune, India",
      duration: "June 2022 – June 2023",
      bullets: [
        "Created Marathi’s largest sentiment-analysis corpus (60 K samples) — published at ICML 2023.",
        "Pioneered BERT masking, back-translation, and GPT augmentation to boost SA accuracy.",
        "Fine-tuned PEGASUS, BRIO, IndicBART for multilingual news summarization; top-3 in ILSUM 2022 (FIRE 2022).",
      ],
    },
    {
      title: "Undergraduate Research Assistant",
      company: "Pune Institute of Computer Technology",
      location: "Pune, India",
      duration: "October 2021 – May 2023",
      bullets: [
        "Mentored five juniors on NLP research projects.",
        "1st place, DravidianLangTech (ACL 2022) for neural MT work on Dravidian languages.",
        "Published medical-literature summarization at COLING 2022 (92 % ROUGE-L).",
        "Unsupervised MT for German/Sorbian variants (WMT-EMNLP 2022).",
        "State-of-the-art multilingual image-captioning (CGIP 2023).",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "iMocha",
      location: "Remote · Pune, India",
      duration: "January 2022 – December 2022",
      bullets: [
        "Part of the core team that built an ML-driven interview-assessment platform for real-time speech evaluation.",
        "Migrated LUIS → Azure CLU, boosting scalability and accuracy.",
        "Built a responsive Angular + Node.js front-end with reusable UI libraries.",
        "Integrated RESTful APIs for reliable, efficient data flow.",
      ],
    },
    {
      title: "ML Intern",
      company: "ResoluteAI.in",
      location: "Bengaluru, India",
      duration: "October 2021 – January 2022",
      bullets: [
        "Developed a real-time video system to gauge dock-loading efficiency (97 % accuracy).",
        "Led a 5-member team on a textile CV project, achieving 96 % accuracy with a robust ML pipeline.",
      ],
    },
  ];

  return (
    <Container fluid className="project-section" style={{ color: "white" }}>
      <Particle />
      <Container>
        <h1 className="work-experience-heading">
          <strong className="purple">Work Experience</strong>
        </h1>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="work-experience-item"
            style={{
              justifyContent: "center",
              paddingBottom: "10px",
              marginBottom: "35px",
            }}
          >
            <h3>{exp.title}</h3>
            <p>
              <strong>Company:</strong> {exp.company}
            </p>
            <p style={{ marginTop: "-16px" }}>
              <strong>Duration:</strong> {exp.duration}
            </p>
            <ul style={{ textAlign: "left" }}>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </Container>
  );
}

export default Experience;
