"use client";

interface ActivityBarProps {
  activePanel: "explorer";
}

export default function ActivityBar({ activePanel }: ActivityBarProps) {
  return (
    <div className="w-12 flex-shrink-0 bg-vscode-sidebar border-r border-vscode-border flex flex-col items-center py-2 gap-1">
      {/* Files icon */}
      <button
        className={`w-10 h-10 flex items-center justify-center rounded transition-colors duration-100 ${
          activePanel === "explorer"
            ? "text-vscode-text border-l-2 border-vscode-accent"
            : "text-vscode-textMuted hover:text-vscode-text"
        }`}
        title="Explorer"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
        </svg>
      </button>

      {/* Search icon */}
      <button
        className="w-10 h-10 flex items-center justify-center rounded text-vscode-textMuted hover:text-vscode-text transition-colors duration-100"
        title="Search"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </button>

      {/* Git icon */}
      <button
        className="w-10 h-10 flex items-center justify-center rounded text-vscode-textMuted hover:text-vscode-text transition-colors duration-100"
        title="Source Control"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="6" cy="6" r="2" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="12" r="2" />
          <path d="M6 8v8M6 8c0 4 12 2 12-2" />
        </svg>
      </button>

      {/* Extensions icon */}
      <button
        className="w-10 h-10 flex items-center justify-center rounded text-vscode-textMuted hover:text-vscode-text transition-colors duration-100"
        title="Extensions"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="9" height="9" rx="1" />
          <rect x="13" y="2" width="9" height="9" rx="1" />
          <rect x="2" y="13" width="9" height="9" rx="1" />
          <rect x="13" y="13" width="9" height="9" rx="1" />
        </svg>
      </button>

      <div className="flex-1" />

      {/* Settings icon */}
      <button
        className="w-10 h-10 flex items-center justify-center rounded text-vscode-textMuted hover:text-vscode-text transition-colors duration-100"
        title="Settings"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      </button>
    </div>
  );
}
