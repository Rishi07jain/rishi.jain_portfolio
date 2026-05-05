"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { FileId } from "./Sidebar";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";
import Home from "@/sections/Home";
import Skills from "@/sections/Skills";

function buildSectionMap(onNavigate?: (id: FileId) => void): Record<FileId, React.ReactNode> {
  return {
    home: <Home onNavigate={onNavigate} />,
    about: <About />,
    projects: <Projects />,
    skills: <Skills />,
    experience: <Experience />,
    contact: <Contact />,
  };
}

interface EditorProps {
  activeFile: FileId | null;
  openTabs: FileId[];
  onNavigate?: (id: FileId) => void;
}

function LineNumbers({ count }: { count: number }) {
  return (
    <div className="flex-shrink-0 w-12 pt-8 pb-8 text-right pr-4 select-none border-r border-vscode-border/30">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="text-vscode-lineNum text-xs font-mono leading-7">
          {i + 1}
        </div>
      ))}
    </div>
  );
}

export default function Editor({ activeFile, openTabs, onNavigate }: EditorProps) {
  if (!activeFile || openTabs.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-vscode-bg text-center">
        <div className="font-mono">
          <div className="text-4xl mb-6 opacity-20">{"</>"}</div>
          <div className="text-vscode-textMuted text-sm mb-2">
            No file is open
          </div>
          <div className="text-vscode-textMuted/60 text-xs">
            Select a file from the explorer to start
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-hidden flex flex-col bg-vscode-bg">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 px-4 py-1 text-xs font-mono text-vscode-textMuted border-b border-vscode-border/40 flex-shrink-0">
        <span>rishi-jain</span>
        <span className="opacity-40">›</span>
        <span>src</span>
        <span className="opacity-40">›</span>
        <span className="text-vscode-text">{activeFile === "home" ? "home.tsx" : activeFile === "about" ? "about.html" : activeFile === "projects" ? "projects.js" : activeFile === "skills" ? "skills.json" : activeFile === "experience" ? "experience.ts" : "contact.css"}</span>
      </div>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden">
        <LineNumbers count={120} />

        <div className="flex-1 overflow-y-auto overflow-x-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFile}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {buildSectionMap(onNavigate)[activeFile]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
