import { experiences } from "./components/Experience/Experience";
import { PROJECTS } from "./components/Projects/ProjectsPage";
import { resumes } from "./components/Resume/ResumeNew";

test("latest work experience is displayed first", () => {
  expect(experiences[0].company).toBe("OneHermes");
  expect(experiences[1].company).toBe("University of Southern California");
});

test("new AI projects are featured", () => {
  expect(PROJECTS.slice(0, 3).map((project) => project.featured)).toEqual([true, true, true]);
  expect(PROJECTS[0].title).toMatch(/MedAssist AI/);
});

test("both tailored resume PDFs are listed", () => {
  expect(resumes.map((resume) => resume.id)).toEqual(["software", "ai-ml"]);
  expect(resumes.every((resume) => resume.file.endsWith(".pdf"))).toBe(true);
});
