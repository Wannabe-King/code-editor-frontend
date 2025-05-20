import React from 'react';
import { X } from 'lucide-react';

interface TabsProps {
  files: string[];
  activeFile: string;
  onTabSelect: (filename: string) => void;
  onTabClose: (filename: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ files, activeFile, onTabSelect, onTabClose }) => {
  return (
    <div className="tabs-container flex border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 overflow-x-auto">
      {files.map((file) => (
        <div
          key={file}
          className={`tab flex items-center py-1 px-3 border-r border-gray-200 dark:border-gray-700 cursor-pointer transition-colors duration-150 ${
            activeFile === file
              ? 'bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
          onClick={() => onTabSelect(file)}
        >
          <span className="text-sm truncate max-w-xs">{file}</span>
          <button
            className="ml-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={(e) => {
              e.stopPropagation();
              onTabClose(file);
            }}
          >
            <X size={12} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tabs;