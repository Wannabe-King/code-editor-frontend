import React from 'react';
import { Folder, File as FileIcon, Plus } from 'lucide-react';

interface FileExplorerProps {
  files: string[];
  activeFile: string;
  onFileSelect: (filename: string) => void;
  onAddFile: () => void;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ 
  files, 
  activeFile, 
  onFileSelect, 
  onAddFile 
}) => {
  return (
    <div className="file-explorer border-r border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 flex flex-col">
      <div className="flex justify-between items-center p-2 border-b border-gray-200 dark:border-gray-700">
        <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors duration-150">
          <Folder size={18} className="text-gray-700 dark:text-gray-300" />
        </button>
        <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors duration-150">
          <FileIcon size={18} className="text-gray-700 dark:text-gray-300" />
        </button>
        <button 
          onClick={onAddFile}
          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors duration-150"
        >
          <Plus size={18} className="text-gray-700 dark:text-gray-300" />
        </button>
      </div>
      <div className="overflow-y-auto flex-grow">
        {files.map((file) => (
          <div 
            key={file}
            className={`flex items-center p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-150 ${
              activeFile === file ? 'bg-gray-200 dark:bg-gray-700' : ''
            }`}
            onClick={() => onFileSelect(file)}
          >
            <FileIcon size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-800 dark:text-gray-200">{file}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileExplorer;