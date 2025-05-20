import React from 'react';
import { Play, Share, Terminal } from 'lucide-react';

interface ActionBarProps {
  onRun: () => void;
  onShare: () => void;
  isRunning: boolean;
}

const ActionBar: React.FC<ActionBarProps> = ({ onRun, onShare, isRunning }) => {
  return (
    <div className="action-bar border-t border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-2 flex items-center">
      <button
        onClick={onRun}
        disabled={isRunning}
        className={`${
          isRunning 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-green-500 hover:bg-green-600'
        } text-white py-1 px-3 rounded flex items-center mr-2 transition-colors duration-200`}
      >
        <Play size={16} className="mr-1" />
        Run
      </button>
      <button
        onClick={onShare}
        className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 py-1 px-3 rounded flex items-center mr-2 transition-colors duration-200"
      >
        <Share size={16} className="mr-1" />
        Share
      </button>
      <input
        type="text"
        placeholder="Command Line Arguments"
        className="flex-grow py-1 px-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm"
      />
    </div>
  );
};

export default ActionBar;