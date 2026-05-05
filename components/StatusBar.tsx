"use client";

import type { FileId } from "./Sidebar";

interface StatusBarProps {
  activeFile: FileId | null;
}

const fileExtMap: Record<FileId, { ext: string; lang: string }> = {
  home: { ext: "home.tsx", lang: "TypeScript" },
  about: { ext: "about.html", lang: "HTML" },
  projects: { ext: "projects.js", lang: "JavaScript" },
  skills: { ext: "skills.json", lang: "JSON" },
  experience: { ext: "experience.ts", lang: "TypeScript" },
  contact: { ext: "contact.css", lang: "CSS" },
};

export default function StatusBar({ activeFile }: StatusBarProps) {
  const info = activeFile ? fileExtMap[activeFile] : null;

  return (
    <div className="flex-shrink-0 h-6 bg-vscode-accent flex items-center justify-between px-3 text-[11px] font-mono text-white/90 select-none">
      {/* Left items */}
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="6" cy="6" r="2" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="12" r="2" />
            <path d="M6 8v8M6 8c0 4 12 2 12-2" />
          </svg>
          main
        </span>
        <span className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          0 errors
        </span>
        <span>⚠ 0 warnings</span>
      </div>

      {/* Right items */}
      <div className="flex items-center gap-4">
        {info && (
          <>
            <span className="opacity-80">{info.ext}</span>
            <span>{info.lang}</span>
          </>
        )}
        <span>UTF-8</span>
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span className="opacity-70">Rishi Jain</span>
      </div>
    </div>
  );
}
