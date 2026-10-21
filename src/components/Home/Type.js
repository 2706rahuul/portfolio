import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Founding Software Engineer",
          "Full-Stack Developer",
          "AI / ML Engineer",
          "NLP Researcher",
          "Building Agentic AI & RAG Systems",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
