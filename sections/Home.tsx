"use client";

import { motion } from "framer-motion";
import type { FileId } from "@/components/Sidebar";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const line = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const badges = [
  { label: "Fullstack Developer", dot: "#569cd6" },
  { label: "Data Analyst", dot: "#c586c0" },
  { label: "AI Automation Engineer", dot: "#4ec9b0" },
];

interface HomeProps {
  onNavigate?: (id: FileId) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="font-mono p-10 max-w-4xl"
    >
      {/* Comment line */}
      <motion.div variants={line} className="mb-8 text-sm">
        <span className="text-vscode-comment">
          {"// hello world !! Welcome to my portfolio"}
        </span>
      </motion.div>

      {/* Hero name */}
      <motion.div variants={line} className="mb-2 leading-none">
        <span
          className="text-white font-bold"
          style={{ fontSize: "clamp(48px, 7vw, 88px)" }}
        >
          Rishi
        </span>
      </motion.div>
      <motion.div variants={line} className="mb-8 leading-none">
        <span
          className="font-bold bg-clip-text text-transparent"
          style={{
            fontSize: "clamp(48px, 7vw, 88px)",
            backgroundImage: "linear-gradient(135deg, #f472b6 0%, #c084fc 50%, #818cf8 100%)",
          }}
        >
          Jain
        </span>
      </motion.div>

      {/* Badge row */}
      <motion.div variants={line} className="flex flex-wrap gap-2 mb-8">
        {badges.map((badge) => (
          <span
            key={badge.label}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-vscode-text hover:border-white/20 transition-colors duration-150"
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: badge.dot }}
            />
            {badge.label}
          </span>
        ))}
      </motion.div>

      {/* Description */}
      <motion.div
        variants={line}
        className="text-sm leading-7 text-vscode-textDim mb-10 max-w-xl"
      >
        <span className="text-vscode-comment">{"// "}</span>
        I live at the crossroads of{" "}
        <span className="text-vscode-type font-semibold">low-code automation </span>
        {", "}
        <span className="text-vscode-purple font-semibold">data analytics</span>
        {", and "}
        <span className="text-vscode-lightBlue font-semibold">full-stack development</span>
        {". I build systems that are genuinely "}
        <span className="text-vscode-type font-semibold">intelligent</span>
        {" and "}
        <span className="text-vscode-green font-semibold">scalable</span>
        {"."}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div variants={line} className="flex flex-wrap gap-3">
        <button
          onClick={() => onNavigate?.("projects")}
          className="flex items-center gap-2 px-5 py-2 text-sm font-mono font-medium rounded text-white transition-all duration-150 hover:brightness-110 active:scale-95"
          style={{ backgroundColor: "#007acc" }}
        >
          <span>📁</span>
          Projects
        </button>
        <button
          onClick={() => onNavigate?.("about")}
          className="flex items-center gap-2 px-5 py-2 text-sm font-mono font-medium rounded border border-vscode-border text-vscode-text bg-transparent hover:bg-white/5 transition-all duration-150 active:scale-95"
        >
          <span>👤</span>
          About Me
        </button>
        <button
          onClick={() => onNavigate?.("contact")}
          className="flex items-center gap-2 px-5 py-2 text-sm font-mono font-medium rounded border border-vscode-border text-vscode-text bg-transparent hover:bg-white/5 transition-all duration-150 active:scale-95"
        >
          <span>✉</span>
          Contact
        </button>
      </motion.div>

      {/* Stats row */}
      <motion.div
        variants={line}
        className="mt-14 flex gap-10 border border-vscode-border/50 rounded bg-white/[0.02] px-8 py-5 max-w-xl"
      >
        {[
          { value: "9.33", label: "CGPA" },
          { value: "10+", label: "PROJECTS" },
          { value: "3", label: "CERTIFICATIONS" },
          { value: "↑", label: "ALWAYS LEARNING" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 flex-1">
            <span className="text-white font-bold text-xl">{stat.value}</span>
            <span className="text-vscode-textMuted text-[10px] tracking-widest uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Social links */}
      <motion.div variants={line} className="mt-6 flex flex-wrap gap-2">
        {[
          { label: "GitHub", icon: "⬡", href: "https://github.com/Rishi07jain" },
          { label: "LinkedIn", icon: "in", href: "https://linkedin.com/in/rishi-jain-70715022a/" },
          { label: "Email", icon: "✉", href: "mailto:rishijain70777@gmail.com" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-vscode-border/60 rounded text-vscode-textDim hover:text-vscode-text hover:border-vscode-border transition-all duration-150"
          >
            <span className="text-vscode-textMuted text-[11px]">{s.icon}</span>
            {s.label}
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}
