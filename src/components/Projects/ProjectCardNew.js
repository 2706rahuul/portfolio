import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCardNew({ title, techStack = [], bulletPoints = [], viewLink, featured = false }) {
  return (
    <Card className={`project-card-view ${featured ? "project-card-featured" : ""}`}>
      <Card.Body>
        {/* {featured && <span className="project-featured-label">Featured Project</span>} */}
        <Card.Title>{title}</Card.Title>
        {techStack.length > 0 && (
          <div className="mb-3">
            {techStack.map((tech) => (
              <span key={tech} className="badge bg-secondary me-1 project-tech-badge">{tech}</span>
            ))}
          </div>
        )}
        <Card.Text as="div">
          <ul className="text-start ps-3">
            {bulletPoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </Card.Text>
        {viewLink && (
          <Button variant="primary" href={viewLink} target="_blank" rel="noopener noreferrer">
            View Project
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCardNew;
