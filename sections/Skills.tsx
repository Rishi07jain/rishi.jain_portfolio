"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const skillCategories: { title: string; icon: string; skills: { name: string; dot: string }[] }[] = [
  {
    title: "LANGUAGES",
    icon: "λ",
    skills: [
      { name: "Java", dot: "#f97316" },
      { name: "Python", dot: "#facc15" },
      { name: "C++", dot: "#60a5fa" },
      { name: "SQL", dot: "#4ade80" },
      { name: "JavaScript", dot: "#fde047" },
      { name: "TypeScript", dot: "#38bdf8" },
    ],
  },
  {
    title: "FRAMEWORKS & BACKEND",
    icon: "⬡",
    skills: [
      { name: "Spring Boot", dot: "#22c55e" },
      { name: "Node.js", dot: "#a3e635" },
      { name: "Express.js", dot: "#9ca3af" },
      { name: "Flask", dot: "#2dd4bf" },
      { name: "FastAPI", dot: "#34d399" },
    ],
  },
  {
    title: "DATA & DATABASES",
    icon: "◈",
    skills: [
      { name: "PostgreSQL", dot: "#3b82f6" },
      { name: "MongoDB", dot: "#22c55e" },
      { name: "Trino / Presto", dot: "#a78bfa" },
      { name: "Pandas", dot: "#60a5fa" },
      { name: "NumPy", dot: "#818cf8" },
    ],
  },
  {
    title: "DATA ANALYTICS & VIZ",
    icon: "◎",
    skills: [
      { name: "Power BI", dot: "#eab308" },
      { name: "Apache Superset", dot: "#22d3ee" },
      { name: "Matplotlib", dot: "#2dd4bf" },
      { name: "Excel (Intermediate)", dot: "#4ade80" },
    ],
  },
  {
    title: "AI / ML",
    icon: "✦",
    skills: [
      { name: "Scikit-learn", dot: "#f97316" },
      { name: "OpenAI API", dot: "#a78bfa" },
      { name: "LLM Concepts", dot: "#c084fc" },
      { name: "Prompt Engineering", dot: "#e879f9" },
      { name: "RAG Pipelines", dot: "#818cf8" },
      { name: "Hugging Face", dot: "#fbbf24" },
    ],
  },
  {
    title: "TOOLS & INFRA",
    icon: "⚙",
    skills: [
      
      { name: "WebSockets", dot: "#f472b6" },
      { name: "Git", dot: "#fb923c" },
      { name: "n8n", dot: "#fb7185" },
      { name: "Docker", dot: "#38bdf8" },
    ],
  },
];

export default function Skills() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="font-mono text-sm p-8 max-w-5xl"
    >
      {/* Comment header */}
      <motion.div variants={item} className="mb-4">
        <span className="text-vscode-comment text-xs tracking-wide">
          {"// skills.json – tech stack & tools I actually use"}
        </span>
      </motion.div>

      {/* Large heading */}
      <motion.div variants={item} className="mb-3">
        <h1 className="font-display text-5xl md:text-6xl text-white font-black leading-tight">
          Skills
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div variants={item} className="mb-10">
        <span className="text-vscode-textMuted text-xs tracking-wider">
          {'{ "status": "always_learning", "passion": "immeasurable" }'}
        </span>
      </motion.div>

      {/* Skills grid */}
      <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {skillCategories.map((cat) => (
          <motion.div key={cat.title} variants={item}>
            {/* Category header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-vscode-accent text-sm">{cat.icon}</span>
              <h3 className="text-sm font-bold font-sans tracking-wide text-white">
                {cat.title}
              </h3>
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-vscode-textDim border border-vscode-border/50 bg-white/[0.03] hover:border-vscode-border hover:text-vscode-text transition-colors duration-150 cursor-default"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: skill.dot }}
                  />
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
