"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const lines = [
  { delay: 0, prompt: true, text: "node portfolio.js" },
  { delay: 600, prompt: false, text: "" },
  { delay: 700, prompt: false, text: "  ╔══════════════════════════════════════════════╗" },
  { delay: 750, prompt: false, text: "  ║         RISHI JAIN  —  Portfolio v2.0        ║" },
  { delay: 800, prompt: false, text: "  ║     Fullstack · Data Analytics · AI Auto     ║" },
  { delay: 850, prompt: false, text: "  ╚══════════════════════════════════════════════╝" },
  { delay: 1100, prompt: false, text: "" },
  { delay: 1200, prompt: false, text: "  ✓ Rishi Jain — Fullstack Developer & AI Automation Engineer" },
  { delay: 1400, prompt: false, text: "  ✓ Currently interning at JioSaavn" },
  { delay: 1600, prompt: false, text: "  ✓ Based in Mumbai, Maharashtra" },
  { delay: 1800, prompt: false, text: "" },
  { delay: 2000, prompt: true, text: "git log --oneline -3" },
  { delay: 2400, prompt: false, text: "  a4f3c1e feat: build real-time fraud detection system" },
  { delay: 2500, prompt: false, text: "  9bc2d18 feat: add CardWise recommendation engine" },
  { delay: 2600, prompt: false, text: "  3ef1a07 feat: launch Fisc.com AI tax platform" },
  { delay: 2800, prompt: false, text: "" },
  { delay: 2900, prompt: true, text: "" },
];

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lines.forEach((_, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => Math.max(prev, i + 1));
      }, lines[i].delay);
    });
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleLines]);

  return (
    <motion.div
      animate={{ height: isMinimized ? 32 : 200 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="flex-shrink-0 border-t border-vscode-border bg-vscode-terminal flex flex-col overflow-hidden"
    >
      {/* Terminal header */}
      <div className="flex items-center justify-between px-3 py-1 bg-vscode-sidebar border-b border-vscode-border flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-xs text-vscode-textMuted font-mono uppercase tracking-wider">
            Terminal
          </span>
          <span className="text-[10px] text-vscode-textMuted font-mono">
            zsh — portfolio
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized((v) => !v)}
            className="text-vscode-textMuted hover:text-vscode-text text-xs px-1 transition-colors"
          >
            {isMinimized ? "▲" : "▼"}
          </button>
        </div>
      </div>

      {/* Terminal content */}
      {!isMinimized && (
        <div className="flex-1 overflow-y-auto p-3 font-mono text-[12px] leading-5">
          {lines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="flex items-start gap-1"
            >
              {line.prompt && (
                <span className="text-vscode-green flex-shrink-0">
                  rishi@portfolio
                  <span className="text-vscode-text">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-vscode-text">$ </span>
                </span>
              )}
              <span
                className={
                  line.prompt
                    ? "text-vscode-text"
                    : line.text.startsWith("  ✓")
                    ? "text-vscode-green"
                    : line.text.startsWith("  a") ||
                      line.text.startsWith("  9") ||
                      line.text.startsWith("  3")
                    ? "text-vscode-textDim"
                    : line.text.includes("╔") ||
                      line.text.includes("║") ||
                      line.text.includes("╚")
                    ? "text-vscode-accent"
                    : "text-vscode-textMuted"
                }
              >
                {line.text}
                {i === visibleLines - 1 && line.prompt && line.text === "" && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="inline-block w-2 h-3.5 bg-vscode-text align-middle ml-0.5"
                  />
                )}
              </span>
            </motion.div>
          ))}
          <div ref={bottomRef} />
        </div>
      )}
    </motion.div>
  );
}
