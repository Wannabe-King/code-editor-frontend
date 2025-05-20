import React, { useEffect, useRef } from 'react';

interface TerminalProps {
  output: string[];
  isRunning: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ output, isRunning }) => {
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when new output is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="terminal-container border-t border-gray-200 dark:border-gray-700">
      <div className="terminal-header bg-gray-100 dark:bg-gray-800 flex items-center p-1 border-b border-gray-200 dark:border-gray-700">
        <div className="flex space-x-1 items-center">
          <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
        </div>
        <span className="ml-2 text-xs text-gray-600 dark:text-gray-300">Terminal Output</span>
      </div>
      <div 
        ref={terminalRef}
        className="terminal-output bg-white dark:bg-gray-900 p-3 font-mono text-sm overflow-y-auto h-32 text-gray-800 dark:text-gray-200"
      >
        {output.length === 0 ? (
          <div className="text-gray-400 dark:text-gray-600">Run your code to see output here</div>
        ) : (
          output.map((line, index) => (
            <div key={index} className="terminal-line">{line}</div>
          ))
        )}
        {isRunning && <div className="terminal-cursor inline-block animate-pulse">▋</div>}
      </div>
    </div>
  );
};

export default Terminal;