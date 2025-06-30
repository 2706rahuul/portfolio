import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

/**
 * Generic card component to showcase software projects.
 * Props
 * - title: string  -> project title
 * - techStack: string[]  -> list of technologies
 * - bulletPoints: string[] -> key highlights / achievements
 * - viewLink: string (optional) -> URL of the live project / repo
 */
function ProjectCardNew({ title, techStack = [], bulletPoints = [], viewLink }) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        {techStack.length > 0 && (
          <div className="mb-2">
            {techStack.map((tech) => (
              <span key={tech} className="badge bg-secondary me-1">
                {tech}
              </span>
            ))}
          </div>
        )}

        <Card.Text as="div">
          <ul className="text-start ps-3">
            {bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </Card.Text>

        {viewLink && (
          <Button variant="primary" href={viewLink} target="_blank">
            View Project
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCardNew;
