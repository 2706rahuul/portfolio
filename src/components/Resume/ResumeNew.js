import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineFilePdf } from "react-icons/ai";

export const resumes = [
  {
    id: "software",
    label: "Software Engineer",
    description: "Full-stack engineering, product delivery, cloud and backend systems.",
    file: "Rahul_Tangsali_Software_Engineer_Resume.pdf",
  },
  {
    id: "ai-ml",
    label: "AI / ML Engineer",
    description: "Agentic AI, RAG, NLP research, evaluation and applied ML.",
    file: "Rahul_Tangsali_AI_ML_Resume.pdf",
  },
];

function ResumeNew() {
  const [selectedId, setSelectedId] = useState("software");
  const selected = resumes.find((resume) => resume.id === selectedId);
  const pdfUrl = `${process.env.PUBLIC_URL || ""}/resumes/${selected.file}`;

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <h1 className="project-heading">My <strong className="purple">Resumes</strong></h1>
        <p className="section-intro">Choose the version most relevant to the position. Both reflect my relevant experiences.</p>
        <div className="resume-selector" role="group" aria-label="Select resume">
          {resumes.map((resume) => (
            <div key={resume.id} className="resume-selector-column">
              <button
                type="button"
                className={`resume-option ${selectedId === resume.id ? "resume-option-active" : ""}`}
                onClick={() => setSelectedId(resume.id)}
                aria-pressed={selectedId === resume.id}
              >
                <AiOutlineFilePdf aria-hidden="true" />
                <span>
                  <strong>{resume.label}</strong>
                  <small>{resume.description}</small>
                </span>
              </button>
            </div>
          ))}
        </div>
        <div className="resume-actions">
          <Button variant="primary" href={pdfUrl} download={selected.file}>
            <AiOutlineDownload /> Download {selected.label} Resume
          </Button>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="resume-open-link">Open PDF in new tab</a>
        </div>
        <div className="resume-preview">
          <iframe key={selected.id} title={`${selected.label} Resume Preview`} src={`${pdfUrl}#toolbar=1&navpanes=0`} loading="lazy" />
        </div>
        <p className="resume-fallback">PDF preview not displaying? Use “Open PDF in new tab” or the download button above.</p>
      </Container>
    </Container>
  );
}

export default ResumeNew;
