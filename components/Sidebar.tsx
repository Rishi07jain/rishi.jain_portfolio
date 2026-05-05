"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type FileId = "home" | "about" | "projects" | "skills" | "experience" | "contact";

interface FileItem {
  id: FileId;
  label: string;
  icon: string;
  color: string;
}

const files: FileItem[] = [
  { id: "home", label: "home.tsx", icon: "TS", color: "text-pink-400" },
  { id: "about", label: "about.html", icon: "H", color: "text-orange-400" },
  { id: "projects", label: "projects.js", icon: "JS", color: "text-yellow-400" },
  { id: "skills", label: "skills.json", icon: "{}", color: "text-teal-400" },
  { id: "experience", label: "experience.ts", icon: "TS", color: "text-blue-400" },
  { id: "contact", label: "contact.css", icon: "#", color: "text-purple-400" },
];

interface SidebarProps {
  activeFile: FileId;
  openTabs: FileId[];
  onFileClick: (id: FileId) => void;
}

export default function Sidebar({ activeFile, openTabs, onFileClick }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-56 flex-shrink-0 bg-vscode-sidebar border-r border-vscode-border flex flex-col select-none">
      {/* Explorer title */}
      <div className="px-4 py-2 text-[11px] text-vscode-textMuted uppercase tracking-widest font-mono font-semibold border-b border-vscode-border">
        Explorer
      </div>

      {/* Folder */}
      <div>
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="w-full flex items-center gap-1.5 px-3 py-1 text-xs text-vscode-text hover:bg-vscode-sidebarHover transition-colors duration-100 font-mono"
        >
          {/* Chevron */}
          <motion.span
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.15 }}
            className="text-vscode-textMuted text-[10px]"
          >
            ▶
          </motion.span>
          {/* Folder icon */}
          <span className="text-yellow-400 text-xs">
            {isOpen ? "📂" : "📁"}
          </span>
          <span className="text-vscode-text font-semibold uppercase tracking-wider text-[11px]">Portfolio</span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              {files.map((file) => {
                const isActive = activeFile === file.id;
                const isOpen_ = openTabs.includes(file.id);
                return (
                  <button
                    key={file.id}
                    onClick={() => onFileClick(file.id)}
                    className={`w-full flex items-center gap-2 pl-8 pr-3 py-0.5 text-xs font-mono transition-colors duration-100 cursor-pointer ${
                      isActive
                        ? "bg-vscode-selection text-white"
                        : "text-vscode-textDim hover:bg-vscode-sidebarHover"
                    }`}
                  >
                    {/* Active indicator line */}
                    {isActive && (
                      <span className="absolute left-0 w-0.5 h-5 bg-vscode-accent rounded-r" />
                    )}
                    {/* File type badge */}
                    <span className={`text-[9px] font-bold ${file.color} bg-white/5 px-0.5 rounded`}>
                      {file.icon}
                    </span>
                    <span className={isOpen_ ? "" : "opacity-60"}>
                      {file.label}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom status */}
      <div className="px-4 py-2 border-t border-vscode-border">
        <div className="text-[10px] text-vscode-textMuted font-mono">
          {files.length} files
        </div>
      </div>
    </div>
  );
}
