import { useState } from "react";
import Header from "./components/Header";
import FileExplorer from "./components/FileExplorer";
import Tabs from "./components/Tabs";
import Terminal from "./components/Terminal";
import ActionBar from "./components/ActionBar";
import StatusBar from "./components/StatusBar";
import { useCodeEditor } from "./hooks/useCodeEditor";
import "./styles/CodeEditor.css";
import { CodeMirrorEditor } from "./components/CodeEditorCodemirror";
import { InputTab } from "./components/inputTab";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const {
    editorViewRef,
    files,
    activeFile,
    output,
    isRunning,
    cursorPosition,
    addNewFile,
    runCode,
    closeFile,
    setActiveFile,
    shareCode,
  } = useCodeEditor();

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex flex-col h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="flex flex-grow overflow-hidden">
          {/* File Explorer */}
          <FileExplorer
            files={files.map((f) => f.name)}
            activeFile={activeFile}
            onFileSelect={setActiveFile}
            onAddFile={addNewFile}
          />

          <div className="flex flex-col flex-grow overflow-hidden">
            {/* Tabs */}
            <Tabs
              files={files.map((f) => f.name)}
              activeFile={activeFile}
              onTabSelect={setActiveFile}
              onTabClose={closeFile}
            />

            {/* Code Editor */}
            <div className="h-full flex">
              <CodeMirrorEditor editorViewRef={editorViewRef} />
              <InputTab />
            </div>

            {/* Terminal Output */}
            <Terminal output={output} isRunning={isRunning} />

            {/* Action Bar */}
            <ActionBar
              onRun={runCode}
              onShare={shareCode}
              isRunning={isRunning}
            />

            {/* Status Bar */}
            <StatusBar
              lineNumber={cursorPosition.line}
              columnNumber={cursorPosition.column}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
