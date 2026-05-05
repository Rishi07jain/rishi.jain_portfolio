"use client";

import { motion } from "framer-motion";
import type { FileId } from "./Sidebar";

const fileLabels: Record<FileId, string> = {
  home: "home.tsx",
  about: "about.html",
  projects: "projects.js",
  skills: "skills.json",
  experience: "experience.ts",
  contact: "contact.css",
};

const fileIcons: Record<FileId, { icon: string; color: string }> = {
  home: { icon: "TS", color: "text-pink-400" },
  about: { icon: "H", color: "text-orange-400" },
  projects: { icon: "JS", color: "text-yellow-400" },
  skills: { icon: "{}", color: "text-teal-400" },
  experience: { icon: "TS", color: "text-blue-400" },
  contact: { icon: "#", color: "text-purple-400" },
};

interface TabsProps {
  openTabs: FileId[];
  activeFile: FileId;
  onTabClick: (id: FileId) => void;
  onTabClose: (id: FileId) => void;
}

export default function Tabs({ openTabs, activeFile, onTabClick, onTabClose }: TabsProps) {
  return (
    <div className="flex items-end bg-vscode-tab border-b border-vscode-border overflow-x-auto flex-shrink-0 h-9">
      {openTabs.map((tab) => {
        const isActive = tab === activeFile;
        const fi = fileIcons[tab];
        return (
          <button
            key={tab}
            onClick={() => onTabClick(tab)}
            className={`relative flex items-center gap-2 px-4 h-full text-xs font-mono transition-colors duration-100 flex-shrink-0 group ${
              isActive
                ? "bg-vscode-tabActive text-vscode-text border-r border-vscode-border"
                : "bg-vscode-tab text-vscode-textMuted hover:text-vscode-text border-r border-vscode-border"
            }`}
          >
            {/* Top active indicator */}
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute top-0 left-0 right-0 h-[2px] bg-vscode-accent"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            )}

            {/* File icon */}
            <span className={`text-[9px] font-bold ${fi.color} bg-white/5 px-0.5 rounded`}>
              {fi.icon}
            </span>

            <span>{fileLabels[tab]}</span>

            {/* Close button */}
            <span
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.stopPropagation();
                  onTabClose(tab);
                }
              }}
              className={`ml-1 w-4 h-4 flex items-center justify-center rounded text-vscode-textMuted hover:text-vscode-text hover:bg-white/10 transition-all duration-100 ${
                isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              ×
            </span>
          </button>
        );
      })}
    </div>
  );
}
