import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCardNew from "./ProjectCardNew";

// Update this array with your real projects.
const PROJECTS = [
  {
    title: "Self‑Hosted AI Text‑to‑Speech & Voice Conversion Platform",
    techStack: ["PyTorch", "FastAPI", "Next.js", "AWS", "Docker", "StyleTTS2"],
    bulletPoints: [
      "Containerised three GPU micro‑services (StyleTTS2 TTS, SeedVC voice conversion, sound‑effect generation) with Docker Compose on AWS EC2.",
      "Fine‑tuned models on 10‑15 min of custom audio and used Inngest to queue and throttle requests.",
      "Built a secure credits‑based workflow using Next.js frontend, Node proxy, FastAPI backends, S3 presigned URLs and IAM roles."
    ]
  },
  {
    title: "AI‑Powered Personal Finance Platform",
    techStack: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Inngest",
      "Gemini API",
      "Recharts"
    ],
    bulletPoints: [
      "Mobile‑responsive dashboard with Radix UI and Clerk authentication delivering personalised finance insights.",
      "Automated monthly reports, recurring‑transaction handling and budget alerts via Gemini API and Inngest cron jobs.",
      "Receipt‑scanner with ML OCR and interactive spending‑trend charts via Recharts."
    ],
    viewLink: "https://ai-finance-manager-qlaq.vercel.app/"
  },
  {
    title: "AI Recruiter Voice Agent",
    techStack: ["Next.js", "Tailwind CSS", "Radix UI", "Supabase", "Vapi API", "PayPal"],
    bulletPoints: [
      "Voice agent that autonomously conducts interviews, transcribes responses and generates feedback through Vapi API.",
      "Full‑stack SaaS with secure auth, interview management, transcript storage and PayPal subscription billing."
    ],
    viewLink: "https://ai-interviewer-platform-weld.vercel.app/"
  },
  {
    title: "AI‑Powered Car Marketplace",
    techStack: ["Next.js", "Gemini API", "Shadcn/UI", "Tailwind CSS", "Supabase"],
    bulletPoints: [
      "AI‑driven image search and car‑detail extraction to deliver responsive listings and detailed spec pages.",
      "Interactive EMI calculator, advanced filters and admin portal with React‑Hook‑Form and Zod validation."
    ],
    viewLink: "https://ai-car-marketplace-weld.vercel.app/"
  },
  {
    title: "Real‑Time Stock Search Portfolio Tool (Web)",
    techStack: [
      "Angular",
      "Node.js",
      "Express",
      "MongoDB",
      "Highcharts",
      "Finnhub",
      "Polygon.io"
    ],
    bulletPoints: [
      "Full‑stack app providing live stock quotes and dynamic visualisations.",
      "Watchlists and portfolios stored in MongoDB Atlas, responsive UI with Bootstrap.",
      "Deployed on Google Cloud App Engine."
    ],
    viewLink: "https://frontend-30-march-1146-ass3.wl.r.appspot.com/"
  },
  {
    title: "Stock Portfolio Tool — iOS",
    techStack: ["SwiftUI", "Node.js", "Express", "MongoDB", "Finnhub API"],
    bulletPoints: [
      "Native iOS app enabling virtual‑money trading, watchlists and portfolio management.",
      "Auto‑refreshing real‑time price charts and auto‑complete search with SwiftUI."
    ],
    viewLink: "https://github.com/rahuul2001/Stock-Portfolio-Tool---iOS-App.git"
  },
  {
    title: "Stock Portfolio Tool — Flask",
    techStack: [
      "Python",
      "Flask",
      "Google Cloud",
      "HighCharts",
      "Finnhub",
      "Polygon.io"
    ],
    bulletPoints: [
      "REST backend serving real‑time prices, news and historical data, deployed on Google Cloud.",
      "Responsive JavaScript frontend rendering interactive tables and charts via XMLHttpRequest."
    ],
    viewLink: "https://rahuul2706-1234.wl.r.appspot.com/"
  },
  {
    title: "CourseAlchemy – AI Course Builder",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API"
    ],
    bulletPoints: [
      "GPT‑4 powered REST API that auto‑generates week‑by‑week course syllabi secured with JWT.",
      "SPA for dynamic course generation, dashboard management and one‑click PDF/TXT export via jsPDF."
    ],
    viewLink: "https://coursealchemy-frontend.onrender.com/"
  },
  {
    title: "CloudShare – Secure File‑Sharing Platform",
    techStack: [
      "Next.js",
      "Clerk",
      "Firebase Storage",
      "Tailwind CSS",
      "React Email"
    ],
    bulletPoints: [
      "Drag‑and‑drop uploads with real‑time progress tracking and protected link distribution.",
      "Generated 150+ secure sharing links while onboarding 50+ test users.",
      "Responsive UI optimised for mobile and desktop."
    ],
    viewLink: "https://cloudshare-kypf7u76j-rahul-tangsalis-projects.vercel.app/"
  },
  {
    title: "PostCard – HyperLogLog for PostgreSQL",
    techStack: ["C", "PostgreSQL Internals", "HyperLogLog"],
    bulletPoints: [
      "Implemented HLL_JOIN estimator slashing planner memory by 90% and speeding up planning 4× on 500K‑row joins.",
      "Integrated 16‑bit HLL sketches with 64 KB limit into PostgreSQL parser, planner and executor, backed by 1k+ tests."
    ],
    viewLink: "https://github.com/rahuul2001/PostCARD"
  },
  {
    title: "PostgreSQL FIFO Buffer Manager",
    techStack: ["C", "PostgreSQL 16.4", "Docker", "gdb"],
    bulletPoints: [
      "Added FIFO page‑replacement option toggled at runtime, packaged in Docker for clean testing.",
      "Benchmarked and tuned to cut read latency by 10% across mixed workloads."
    ]
  },
  {
    title: "Continual Learning mBERT NER",
    techStack: ["PyTorch", "mBERT", "Experience Replay", "WikiANN"],
    bulletPoints: [
      "Continual‑learning framework preventing catastrophic forgetting across EN/ES/HE languages.",
      "Raised NER F1‑scores to 81% (EN), 91% (ES) and 82% (HE) with <2% backward transfer drop."
    ]
  },
  {
    title: "Credit Risk Classifier Optimization",
    techStack: ["Python", "CatBoost", "LightGBM", "XGBoost", "PyTorch", "Polars"],
    bulletPoints: [
      "Ensemble pipeline with stratified K‑fold stacking achieving 0.75 AUC and +10 percentage points high‑risk recall.",
      "Optimised data pipelines in Polars reducing memory by 40% and performed ablation studies/hyperparameter tuning."
    ]
  }
];

function ProjectsPage() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projects</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((proj) => (
            <Col key={proj.title} md={4} className="project-card">
              <ProjectCardNew {...proj} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsPage;
