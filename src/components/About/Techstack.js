import React from "react";
import { Row, Col } from "react-bootstrap";

const SKILL_GROUPS = [
  { title: "Languages", items: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "Swift"] },
  { title: "Frontend & Mobile", items: ["React", "Next.js", "Angular", "React Native"] },
  { title: "Backend & APIs", items: ["Node.js", "Express.js", "FastAPI", "REST APIs"] },
  { title: "Data & Infrastructure", items: ["MongoDB", "PostgreSQL", "MySQL", "Pinecone", "Supabase"] },
  { title: "AI / ML", items: ["PyTorch", "Hugging Face", "NLP", "LLMs", "RAG", "LangGraph", "LangChain", "mBERT"] },
  { title: "Retrieval & Evaluation", items: ["Vector Search", "OpenAI", "Cohere Rerank", "MCP", "Embeddings", "LLM-as-Judge"] },
];

function Techstack() {
  return (
    <Row className="skill-grid">
      {SKILL_GROUPS.map((group) => (
        <Col key={group.title} md={6} lg={4} className="skill-grid-column">
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

export default Techstack;
