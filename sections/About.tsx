"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const focusItems = [
  { emoji: "⚙", text: "Building pipelines & dashboards at JioSaavn — making data actually useful" },
  { emoji: "📐", text: "Digging into the math behind business decisions, because numbers don't lie" },
  { emoji: "🤖", text: "Reverse-engineering how LLMs think, one rabbit hole at a time" },
  { emoji: "✦", text: "Always learning, always shipping — that part never stops" },
];

export default function About() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="font-mono text-sm p-8 max-w-4xl"
    >
      {/* HTML comment header */}
      <motion.div variants={item} className="mb-4">
        <span className="text-vscode-comment text-xs tracking-wide">
          {"<!--"} about.html – Rishi Jain {"-->"}
        </span>
      </motion.div>

      {/* Large heading */}
      <motion.div variants={item} className="mb-3">
        <h1 className="font-display text-5xl md:text-6xl text-white font-black leading-tight">
          About Me
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div variants={item} className="mb-8">
        <span className="text-vscode-textMuted text-xs tracking-wider">
          {"// who I am · what I do · where I build"}
        </span>
      </motion.div>

      {/* Bio card */}
      <motion.div
        variants={item}
        className="bg-vscode-card border border-vscode-cardBorder rounded-lg p-6 mb-8"
      >
        <div className="flex flex-col gap-5 text-sm leading-7 text-vscode-text">
          <p>
            Hi, I&apos;m{" "}
            <span className="text-vscode-accent font-semibold">Rishi Jain</span> — and my entire
            goal with building software is to make people{" "}
            <span className="text-vscode-green font-semibold">lazy in the best way possible</span>.
            The kind of lazy where a process that used to take an hour just runs itself. That&apos;s
            the dream.
          </p>
          <p>
            I have a genuine love for{" "}
            <span className="text-vscode-purple font-semibold">data and business analysis</span>,
            and it comes from a weird place: I just really like math. There&apos;s something
            beautiful about how the same equations that seem abstract on paper can tell a company
            exactly where it&apos;s losing money. The connection between{" "}
            <span className="text-vscode-blue font-semibold">numbers and business decisions</span>{" "}
            genuinely fascinates me.
          </p>
          <p>
            And then there&apos;s{" "}
            <span className="text-vscode-type font-semibold">AI</span>. I don&apos;t just want to
            use it — I want to understand how its brain works. How LLMs reason, where they break,
            why they hallucinate. My goal, somewhat seriously, is to one day be the world&apos;s
            most unskilled successful person. Currently doing that at{" "}
            <span className="text-vscode-accent font-semibold">JioSaavn</span> as a Data Analytics
            Intern.
          </p>
        </div>
      </motion.div>

      {/* Current Focus */}
      <motion.div variants={item} className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-5">
          Current Focus
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {focusItems.map((fi, i) => (
          <motion.div
            key={i}
            variants={item}
            className="flex items-start gap-3 text-sm text-vscode-textDim"
          >
            <span className="text-base flex-shrink-0 mt-0.5">{fi.emoji}</span>
            <span className="leading-6">{fi.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
