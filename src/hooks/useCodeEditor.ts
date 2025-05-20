import { useState, useCallback, useRef } from "react";
import { pythonSample, createNewFile } from "../utils/sampleCode";
import { EditorView } from "codemirror";

export interface CodeFile {
  name: string;
  content: string;
  language: string;
}

export const useCodeEditor = () => {
  const [files, setFiles] = useState<CodeFile[]>([
    { name: "main.py", content: pythonSample, language: "python" },
  ]);
  const [activeFile, setActiveFile] = useState<string>("main.py");
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [cursorPosition, setCursorPosition] = useState({ line: 1, column: 1 });
  const editorViewRef = useRef<EditorView | null>(null);

  const getActiveFileContent = useCallback(() => {
    const file = files.find((f) => f.name === activeFile);
    return file ? file.content : "";
  }, [files, activeFile]);

  const getActiveFileLanguage = useCallback(() => {
    const file = files.find((f) => f.name === activeFile);
    return file ? file.language : "plaintext";
  }, [files, activeFile]);

  const updateFileContent = useCallback(
    (newContent: string) => {
      setFiles((prev) =>
        prev.map((file) =>
          file.name === activeFile ? { ...file, content: newContent } : file
        )
      );
    },
    [activeFile]
  );

  const addNewFile = useCallback(() => {
    // Generate a unique name
    let newFileName = "untitled";
    let counter = 1;
    let finalName = `${newFileName}.py`;

    while (files.some((f) => f.name === finalName)) {
      finalName = `${newFileName}${counter}.py`;
      counter++;
    }

    const newFile: CodeFile = {
      name: finalName,
      content: createNewFile(finalName, "python"),
      language: "python",
    };

    setFiles((prev) => [...prev, newFile]);
    setActiveFile(finalName);
  }, [files]);

  const closeFile = useCallback(
    (fileName: string) => {
      if (files.length <= 1) {
        return; // Don't close the last file
      }

      setFiles((prev) => prev.filter((file) => file.name !== fileName));

      // If we closed the active file, activate another one
      if (activeFile === fileName) {
        setActiveFile(files.find((f) => f.name !== fileName)?.name || "");
      }
    },
    [files, activeFile]
  );

  // const runCode = async () => {};

  const runCode = useCallback(() => {
    setIsRunning(true);
    setOutput([]);

    const file = files.find((f) => f.name === activeFile);
    if (!file) {
      setOutput(["Error: No file selected"]);
      setIsRunning(false);
      return;
    }

    // Simulate code execution
    setTimeout(async () => {
      const language = file.language;
      let simulatedOutput: string[] = [];

      if (language === "python") {
        const code = editorViewRef.current?.state.doc.toString();
        const input = (
          document.getElementById("inputArea") as HTMLTextAreaElement
        ).value;
        if (!code) return;

        try {
          const payload = {
            code: code,
            input: input,
          };
          console.log(payload);
          console.log(`input ${input}`);
          const response = await fetch("https://code-editor-backend-cefd.onrender.com/execute", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });

          const result = await response.json();
          console.log("API Response:", result);
          simulatedOutput = [result.output];
          console.log(`simulated output: ${simulatedOutput}`);
        } catch (error) {
          console.error("Error running code:", error);
        }
      } else {
        simulatedOutput = ["Something wrong with the code"];
      }

      setOutput(simulatedOutput);
      setIsRunning(false);
    }, 1000);
  }, [files, activeFile]);

  const shareCode = useCallback(() => {
    alert(
      "Sharing functionality would be implemented here. This would generate a link to share your code."
    );
  }, []);

  return {
    files,
    activeFile,
    output,
    isRunning,
    cursorPosition,
    getActiveFileContent,
    getActiveFileLanguage,
    updateFileContent,
    addNewFile,
    closeFile,
    setActiveFile,
    runCode,
    shareCode,
    setCursorPosition,
    editorViewRef,
  };
};
