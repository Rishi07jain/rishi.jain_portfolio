import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishi Jain — Developer Portfolio",
  description: "Rishi Jain's VS Code-inspired developer portfolio — Backend Engineer & Business Analyst",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
