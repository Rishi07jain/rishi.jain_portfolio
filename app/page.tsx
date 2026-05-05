"use client";

import { useState } from "react";
import TitleBar from "@/components/TitleBar";
import ActivityBar from "@/components/ActivityBar";
import Sidebar, { type FileId } from "@/components/Sidebar";
import Tabs from "@/components/Tabs";
import Editor from "@/components/Editor";
import Terminal from "@/components/Terminal";
import StatusBar from "@/components/StatusBar";

export default function Home() {
  const [activeFile, setActiveFile] = useState<FileId>("home");
  const [openTabs, setOpenTabs] = useState<FileId[]>(["home"]);

  const handleFileClick = (id: FileId) => {
    setActiveFile(id);
    if (!openTabs.includes(id)) {
      setOpenTabs((prev) => [...prev, id]);
    }
  };

  const handleTabClose = (id: FileId) => {
    const newTabs = openTabs.filter((t) => t !== id);
    setOpenTabs(newTabs);
    if (activeFile === id) {
      setActiveFile(newTabs[newTabs.length - 1] ?? ("home" as FileId));
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-vscode-bg text-vscode-text">
      {/* Title bar */}
      <TitleBar />

      {/* Main body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity bar */}
        <ActivityBar activePanel="explorer" />

        {/* Sidebar */}
        <Sidebar
          activeFile={activeFile}
          openTabs={openTabs}
          onFileClick={handleFileClick}
        />

        {/* Editor area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Tabs */}
          <Tabs
            openTabs={openTabs}
            activeFile={activeFile}
            onTabClick={setActiveFile}
            onTabClose={handleTabClose}
          />

          {/* Editor */}
          <Editor activeFile={activeFile} openTabs={openTabs} onNavigate={handleFileClick} />

          {/* Terminal */}
          <Terminal />
        </div>
      </div>

      {/* Status bar */}
      <StatusBar activeFile={activeFile} />
    </div>
  );
}
