"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

interface Project {
  emoji: string;
  category: string;
  name: string;
  description: string;
  tech: string[];
  status: string;
  statusColor: string;
  url: string;
  date: string;
}

const sections: { id: string; label: string; color: string; projects: Project[] }[] = [
  {
    id: "fullstack",
    label: "Fullstack Development",
    color: "text-blue-400",
    projects: [
      {
        emoji: "🛡️",
        category: "BACKEND · DISTRIBUTED · REAL-TIME",
        name: "Real-Time Fraud Detection System",
        description:
          "Built a real-time distributed transaction processing system using Kafka and microservices architecture. Implemented rule-based risk scoring and alerting with WebSocket-driven dashboards for instant fraud monitoring.",
        tech: ["Spring Boot", "Kafka", "PostgreSQL", "WebSockets", "JWT"],
        status: "Live",
        statusColor: "text-vscode-green",
        url: "https://github.com/Rishi07jain",
        date: "March 2026",
      },
      {
        emoji: "🤖",
        category: "AI · FULL-STACK · FINANCE",
        name: "Fisc.com – AI Tax Management",
        description:
          "Built an AI-powered platform that helps users understand and optimize their taxes by analyzing real investment data. Created a conversational chatbot to simplify complex financial queries.",
        tech: ["React", "Node.js", "MongoDB", "OpenAI API"],
        status: "Live",
        statusColor: "text-vscode-green",
        url: "https://github.com/Rishi07jain",
        date: "May 2025",
      },
    ],
  },
  {
    id: "data-analytics",
    label: "Data Analytics",
    color: "text-purple-400",
    projects: [],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    color: "text-teal-400",
    projects: [
      {
        emoji: "💳",
        category: "ML · RECOMMENDATION · FINTECH",
        name: "CardWise – Credit Card Recommendation",
        description:
          "Built a recommendation engine using cosine similarity to match users with optimal credit cards based on spending behavior. Integrated real-time alerts and reward optimization features.",
        tech: ["Flask", "TypeScript", "Scikit-learn", "Python"],
        status: "GitHub",
        statusColor: "text-vscode-textDim",
        url: "https://github.com/Rishi07jain",
        date: "June 2025",
      },
    ],
  },
  {
    id: "automation",
    label: "Automation Workflows (n8n)",
    color: "text-orange-400",
    projects: [],
  },
];

function ProjectCard({ proj }: { proj: Project }) {
  return (
    <motion.a
      variants={item}
      href={proj.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-vscode-card border border-vscode-cardBorder rounded-lg p-6 card-glow block group cursor-pointer"
    >
      {/* Emoji + category + status */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-2xl mb-2">{proj.emoji}</div>
          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-vscode-green">
            {proj.category}
          </div>
        </div>
        <span
          className={`text-[10px] font-bold uppercase tracking-wider border border-vscode-border rounded px-2 py-0.5 ${proj.statusColor} flex items-center gap-1`}
        >
          {proj.status} ↗
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl text-white font-bold mb-3 group-hover:text-vscode-accent transition-colors">
        {proj.name}
      </h3>

      {/* Description */}
      <p className="text-xs text-vscode-textDim leading-6 mb-5">{proj.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {proj.tech.map((t) => (
          <span key={t} className="tech-tag">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export default function Projects() {
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
          {"// projects.js : things I've built & shipped"}
        </span>
      </motion.div>

      {/* Large heading */}
      <motion.div variants={item} className="mb-3">
        <h1 className="font-display text-5xl md:text-6xl text-white font-black leading-tight">
          Projects
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div variants={item} className="mb-10">
        <span className="text-vscode-textMuted text-xs tracking-wider">
          {"const projects = [ ...shipped, ...building ]"}
        </span>
      </motion.div>

      {/* Category sections */}
      <div className="flex flex-col gap-12">
        {sections.map((section) => (
          <motion.div key={section.id} variants={item}>
            {/* Section header */}
            <div className="flex items-center gap-3 mb-5">
              <span className={`text-xs font-bold uppercase tracking-[0.18em] ${section.color}`}>
                {section.label}
              </span>
              <div className="flex-1 h-px bg-vscode-border/40" />
              <span className="text-[10px] text-vscode-textMuted font-mono">
                {section.projects.length} project{section.projects.length !== 1 ? "s" : ""}
              </span>
            </div>

            {section.projects.length > 0 ? (
              <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {section.projects.map((proj) => (
                  <ProjectCard key={proj.name} proj={proj} />
                ))}
              </motion.div>
            ) : (
              <div className="border border-dashed border-vscode-border/30 rounded-lg px-6 py-5 text-vscode-textMuted text-xs font-mono">
                <span className="text-vscode-comment">{"// coming soon — projects will be added here"}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
