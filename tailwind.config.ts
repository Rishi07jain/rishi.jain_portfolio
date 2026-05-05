import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "Fira Code", "monospace"],
        display: ["var(--font-display)", "Playfair Display", "serif"],
      },
      colors: {
        vscode: {
          bg: "#1e1e1e",
          sidebar: "#252526",
          sidebarHover: "#2a2d2e",
          tab: "#2d2d2d",
          tabActive: "#1e1e1e",
          tabBorder: "#252526",
          border: "#3e3e42",
          text: "#cccccc",
          textMuted: "#6e6e6e",
          textDim: "#858585",
          accent: "#007acc",
          accentHover: "#1a8ad4",
          green: "#4ec9b0",
          blue: "#569cd6",
          purple: "#c586c0",
          lightBlue: "#9cdcfe",
          yellow: "#dcdcaa",
          orange: "#ce9178",
          pink: "#f44747",
          string: "#ce9178",
          keyword: "#569cd6",
          type: "#4ec9b0",
          comment: "#6a9955",
          number: "#b5cea8",
          terminal: "#1e1e1e",
          terminalText: "#cccccc",
          lineNum: "#858585",
          selection: "#264f78",
          activeIndent: "#007acc",
          card: "#252526",
          cardBorder: "#333338",
        },
      },
    },
  },
  plugins: [],
};

export default config;
