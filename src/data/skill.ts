import { shortId } from "@/utils/generate-shortid";

type Skills = {
  id: string;
  name: string;
  skills: string[];
}[];

export const skills: Skills = [
  { id: shortId(), name: "Language", skills: ["JavaScript", "TypeScript"] },
  {
    id: shortId(),
    name: "Frameworks/Librarys",
    skills: ["React Js", "Next Js", "Tailwind CSS"],
  },
  {
    id: shortId(),
    name: "State Management",
    skills: ["Redux Js (with Redux Toolkit)"],
  },
  {
    id: shortId(),
    name: "Testing Library",
    skills: ["Jest", "Vitest", "React Testing Library"],
  },
  {
    id: shortId(),
    name: "Version Control & Package Management",
    skills: ["Git & GitHub", "npm & yarn"],
  },
  {
    id: shortId(),
    name: "Backend Development (Basic)",
    skills: ["Node Js", "Express Js"],
  },
];
