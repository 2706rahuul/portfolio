import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

export const experiences = [
  {
    title: "Founding Software Engineer",
    company: "OneHermes",
    location: "Madison, WI",
    duration: "June 2026 – Present",
    bullets: [
      "Shipped 300+ feature tickets, production enhancements, and fixes for an enterprise workforce-management platform built with Angular, Node.js, Express, and MongoDB.",
      "Engineered scheduling, overnight clock-in/out, shift conflicts, role-based approvals, leave, timesheets, and workforce workflows.",
      "Developed and tested healthcare Patient Care and electronic visit verification (EVV) integrations, including API-driven validation and frontend/backend data flows.",
      "Owned customer issues across 3+ environments, from requirements and root-cause analysis through testing, release validation, and follow-up.",
    ],
  },
  {
    title: "Research Software Engineer",
    company: "University of Southern California",
    location: "Los Angeles, CA",
    duration: "August 2025 – June 2026",
    bullets: [
      "Built Tommy, an AI-powered assistant deployed on USC's Office of International Services website to answer F-1/J-1 immigration questions, handling 2,000+ student queries/month.",
      "Developed ingestion and web-scraping pipelines across 15+ university and government sources to keep the assistant's knowledge base current.",
      "Designed a human-in-the-loop feedback workflow using response ratings and conversation logs to find failures and improve answer quality.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Sumeru Inc.",
    location: "Los Angeles, CA",
    duration: "January 2025 – May 2025",
    bullets: [
      "Migrated a client platform serving 25,000+ monthly active users from legacy PHP to Next.js and Node.js, building reusable UI components, APIs, and business logic.",
      "Reduced P95 API response time from 1.8 seconds to 650 milliseconds by optimizing backend request handling, database queries, and schema design.",
      "Collaborated with customer stakeholders to turn feedback into product requirements and production features.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Sara Technology Inc.",
    location: "Los Angeles, CA",
    duration: "May 2024 – August 2024",
    bullets: [
      "Built React Native onboarding and interactive speech-practice experiences with audio, animations, and progress tracking for an app deployed to 3 schools and 5 therapy clinics.",
      "Contributed to the company's Next.js and TypeScript website and product experience.",
    ],
  },
  {
    title: "Machine Learning Research Intern",
    company: "L3Cube",
    location: "Pune, India",
    duration: "June 2022 – June 2023",
    bullets: [
      "Created and evaluated a multi-domain Marathi sentiment dataset of 60,000+ samples, with human annotations reaching 0.86 Cohen's Kappa.",
      "Fine-tuned MahaBERT, mBERT, MuRIL, and IndicBERT for low-resource classification, reaching up to 84.9% accuracy with MahaBERT.",
      "Explored back-translation, paraphrasing, BERT masking, NER masking, and GPT-based data augmentation for cross-domain robustness.",
    ],
  },
];

function Experience() {
  return (
    <Container fluid className="project-section experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">Professional <strong className="purple">Experience</strong></h1>
        <p className="section-intro">Shipping customer-facing software and researching practical language technologies.</p>
        <div className="experience-list">
          {experiences.map((exp) => (
            <article className="work-experience-item" key={`${exp.company}-${exp.title}`}>
              <div className="experience-topline">
                <div>
                  <h2>{exp.title}</h2>
                  <p className="experience-company">{exp.company} · {exp.location}</p>
                </div>
                <span className="experience-duration">{exp.duration}</span>
              </div>
              <ul>
                {exp.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
