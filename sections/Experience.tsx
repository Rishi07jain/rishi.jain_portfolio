"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const experience = [
  {
    period: "Jan 2026 – Present",
    role: "Business Analyst Intern",
    company: "JioSaavn",
    companyColor: "text-vscode-accent",
    description:
      "Built scalable data pipelines using Trino/Presto engines to process high-volume streaming datasets. Worked on migration of legacy KDM reporting from Google Sheets to Apache Superset by building 4 production-grade dashboards. Created a Growth Model Dashboard to fastrack MAU numbers across different subscription packs for revenue forecasting to help the Strategy and Optimisation stakeholder.",
    tech: ["Trino/Presto", "Apache Superset", "Python", "SQL", "Data Pipelines"],
  },
  {
    period: "Aug 2025 – May 2026",
    role: "Frontend & UI/UX Mentor",
    company: "DJS Unicode",
    companyColor: "text-vscode-purple",
    description:
      "Mentored junior students in web development as part of the college's official development club. Conducted bootcamps and hands-on sessions covering frontend fundamentals, React, and UI/UX principles. Guided mentees through project work and code reviews.",
    tech: ["React.js", "UI/UX", "HTML/CSS", "JavaScript", "Mentorship"],
  },
  {
    period: "Dec 2024 – Mar 2025",
    role: "Frontend Developer Intern",
    company: "Quickyearnings Pvt Ltd",
    companyColor: "text-vscode-green",
    description:
      "Designed and developed two fully functional websites for the company's financial services platform. Implemented responsive UI/UX designs using React and Tailwind CSS, reducing page load time by 35% and ensuring cross-device compatibility.",
    tech: ["React", "TailwindCSS", "JavaScript", "Responsive Design"],
  },
  {
    period: "Aug 2024 – May 2025",
    role: "Public Relations Member",
    company: "DJS ACM",
    companyColor: "text-vscode-type",
    description:
      "Handled public relations for all ACM chapter events, managing outreach to peer colleges and driving awareness around membership drives. Led sponsorship and fundraising efforts to support committee initiatives, and coordinated event publicity across platforms.",
    tech: ["Event Management", "PR & Outreach", "Community Building", "Fundraising"],
  },
];

export default function Experience() {
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
          {"// experience.ts – professional journey"}
        </span>
      </motion.div>

      {/* Large heading */}
      <motion.div variants={item} className="mb-3">
        <h1
          className="font-display text-5xl md:text-6xl font-black leading-tight"
          style={{
            backgroundImage: "linear-gradient(135deg, #f472b6 0%, #c084fc 50%, #818cf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Experience
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div variants={item} className="mb-10">
        <span className="text-vscode-textMuted text-xs tracking-wider">
          {"interface Career extends Timeline {}"}
        </span>
      </motion.div>

      {/* Timeline */}
      <div className="space-y-0">
        {experience.map((exp, idx) => (
          <motion.div
            key={exp.company}
            variants={item}
            className="relative pl-8 pb-10 timeline-line"
            style={idx === experience.length - 1 ? { paddingBottom: 0 } : {}}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-vscode-accent bg-vscode-bg z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-vscode-accent" />
            </div>

            {/* Vertical line - hide for last item */}
            {idx < experience.length - 1 && (
              <div className="absolute left-[7px] top-5 bottom-0 w-0.5 bg-vscode-border" />
            )}

            {/* Period */}
            <div className="text-xs text-vscode-textMuted mb-2 tracking-wide">
              {exp.period}
            </div>

            {/* Role */}
            <h3 className="font-display text-2xl text-white font-bold mb-1">
              {exp.role}
            </h3>

            {/* Company */}
            <div className={`text-sm font-semibold mb-3 ${exp.companyColor}`}>
              @ {exp.company}
            </div>

            {/* Description */}
            <p className="text-xs text-vscode-textDim leading-6 mb-4 max-w-xl">
              {exp.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
