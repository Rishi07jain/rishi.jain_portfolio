"use client";

export default function TitleBar() {
  return (
    <div className="flex-shrink-0 h-8 bg-vscode-sidebar flex items-center justify-between px-4 border-b border-vscode-border select-none">
      {/* Window controls (macOS style) */}
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
      </div>

      {/* Title */}
      <div className="text-xs text-vscode-textMuted font-mono">
        rishi-jain — Visual Studio Code
      </div>

      {/* Menu items */}
      <div className="flex items-center gap-3 text-[11px] text-vscode-textMuted font-mono">
        <button className="hover:text-vscode-text transition-colors">Fil</button>
        <button className="hover:text-vscode-text transition-colors">Edit</button>
        <button className="hover:text-vscode-text transition-colors">View</button>
        <button className="hover:text-vscode-text transition-colors">Go</button>
        <button className="hover:text-vscode-text transition-colors">Terminal</button>
      </div>
    </div>
  );
}
