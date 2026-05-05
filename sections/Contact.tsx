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

const channels = [
  { icon: "✉", label: "Email", value: "rishijain70777@gmail.com", href: "mailto:rishijain70777@gmail.com" },
  { icon: "⬡", label: "GitHub", value: "github.com/Rishi07jain", href: "https://github.com/Rishi07jain" },
  { icon: "in", label: "LinkedIn", value: "linkedin.com/in/rishi-jain-70715022a", href: "https://linkedin.com/in/rishi-jain-70715022a/" },
  { icon: "📞", label: "Phone", value: "+91 8850648339", href: "tel:+918850648339" },
];

export default function Contact() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="font-mono text-sm p-8 max-w-4xl"
    >
      {/* Comment header */}
      <motion.div variants={item} className="mb-4">
        <span className="text-vscode-comment text-xs tracking-wide">
          {"// contact.css – let's connect"}
        </span>
      </motion.div>

      {/* Large heading */}
      <motion.div variants={item} className="mb-3">
        <h1 className="font-display text-5xl md:text-6xl text-white font-black leading-tight">
          Contact
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div variants={item} className="mb-10">
        <span className="text-vscode-textMuted text-xs tracking-wider">
          {".connect { display: flex; gap: infinite; }"}
        </span>
      </motion.div>

      {/* Contact cards grid */}
      <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {channels.map((ch) => (
          <motion.a
            key={ch.label}
            variants={item}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-vscode-card border border-vscode-cardBorder rounded-lg p-5 card-glow block group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-lg">{ch.icon}</span>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-vscode-textMuted">
                {ch.label}
              </span>
            </div>
            <span className="text-sm text-vscode-accent group-hover:text-vscode-accentHover transition-colors">
              {ch.value}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Status info */}
      <motion.div
        variants={item}
        className="bg-vscode-card border border-vscode-cardBorder rounded-lg p-6"
      >
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
          Status
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-vscode-green animate-pulse" />
            <span className="text-xs text-vscode-text">Open to opportunities</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-vscode-accent" />
            <span className="text-xs text-vscode-textDim">Response time: within 24 hours</span>
          </div>
          
        </div>
      </motion.div>
    </motion.div>
  );
}
