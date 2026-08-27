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
}

const sections: { id: string; label: string; color: string; projects: Project[] }[] = [
  {
    id: "fullstack",
    label: "Fullstack / GenAI",
    color: "text-blue-400",
    projects: [
      {
        emoji: "🧭",
        category: "FULLSTACK · AI CAREER TOOL",
        name: "Curate",
        description:
          "An AI career tool that turns job descriptions into tailored project ideas, resume bullets, and LaTeX. It also synthesizes real Reddit and Glassdoor reviews to surface company culture and interview insights.",
        tech: ["React", "Node.js", "Express", "LangGraph", "Gemini"],
        status: "Live",
        statusColor: "text-vscode-green",
        url: "https://curate-jet.vercel.app/",
      },
      {
        emoji: "📚",
        category: "GENAI · RAG · DOCUMENTS",
        name: "DocReader",
        description:
          "A RAG-powered document assistant that answers questions strictly from uploaded files using Gemini embeddings and ChromaDB for grounded context retrieval.",
        tech: ["Python", "Streamlit", "Gemini API", "ChromaDB"],
        status: "Live",
        statusColor: "text-vscode-green",
        url: "https://docreader-app-rishi.streamlit.app/",
      },
      {
        emoji: "📄",
        category: "FULLSTACK · DOCUMENTS",
        name: "DocNest",
        description:
          "A secure personal and family document vault for organizing IDs, medical records, legal files, and financial documents. Share family files seamlessly while keeping private documents protected with browser-based access control.",
        tech: ["React", "Express" , "MongoDB" , "Axios" , "Multer"],
        status: "GitHub",
        statusColor: "text-vscode-textDim",
        url: "https://github.com/Rishi07jain/DocNest",
      },
      {
        emoji: "🎟️",
        category: "FULLSTACK · EVENT MANAGEMENT",
        name: "Eventora",
        description:
          "A secure event management and ticketing platform with role-based access, OTP verification, smart overbooking prevention, and real-time admin analytics.",
        tech: ["React", "Express" , "MongoDB" , "JWT", "Nodemailer"],
        status: "GitHub",
        statusColor: "text-vscode-textDim",
        url: "https://github.com/Rishi07jain/Eventora",
      },
    ],
  },
  {
    id: "data-analytics",
    label: "Data Analytics",
    color: "text-cyan-400",
    projects: [
      {
        emoji: "🛒",
        category: "ANALYTICS · E-COMMERCE",
        name: "Amazon Sales Analysis",
        description:
          "An interactive dashboard analyzing 1.3M Amazon electronics transactions to uncover revenue trends, customer behavior, product performance, and brand dynamics.",
        tech: ["TypeScript", "Recharts", "PapaParse", "React Query"],
        status: "Live",
        statusColor: "text-vscode-green",
        url: "https://amazon-sales-analysis-gold.vercel.app/",
      },
      {
        emoji: "📊",
        category: "ANALYTICS · FINANCE",
        name: "Godrej Portfolio Analysis",
        description:
          "Analyzed a synthetic dataset of 1,800 loans, segmenting the portfolio by region, customer segment, and loan type to derive business insights.",
        tech: ["Excel", "Python"],
        status: "GitHub",
        statusColor: "text-vscode-textDim",
        url: "https://github.com/Rishi07jain/Godrej_portfolio_analysis",
      },
      {
        emoji: "🦠",
        category: "ANALYTICS · PUBLIC HEALTH",
        name: "COVID-19 Analytics Dashboard",
        description:
          "A real-time dashboard analyzing global COVID-19 cases, deaths, recoveries, and geographic trends across countries and continents using public health data.",
        tech: [ "Next.js", "Recharts", "World Bank Data"],
        status: "GitHub",
        statusColor: "text-vscode-textDim",
        url: "https://github.com/Rishi07jain/covid19-analytics-dashboard",
      },
    ],
  },
  {
    id: "ai-automations",
    label: "AI Automations",
    color: "text-teal-400",
    projects: [
      {
        emoji: "📨",
        category: "AUTOMATION · INVOICING",
        name: "Invoice Workflow",
        description:
          "An n8n workflow project for automating invoice-related tasks and reducing repetitive manual processing.",
        tech: ["n8n", "Workflow Automation"],
        status: "GitHub",
        statusColor: "text-vscode-textDim",
        url: "https://github.com/Rishi07jain/Invoice_n8n",
      },
      {
        emoji: "▶️",
        category: "AUTOMATION · CONTENT",
        name: "YouTrend",
        description:
          "An n8n workflow project for automating a YouTube trend-focused content process.",
        tech: ["n8n", "Workflow Automation", "YouTube"],
        status: "GitHub",
        statusColor: "text-vscode-textDim",
        url: "https://github.com/Rishi07jain/YouTrend_n8n",
      },
    ],
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
