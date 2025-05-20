import React from 'react';

interface StatusBarProps {
  lineNumber: number;
  columnNumber: number;
}

const StatusBar: React.FC<StatusBarProps> = ({ lineNumber, columnNumber }) => {
  return (
    <div className="status-bar bg-gray-200 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-400 p-1 flex justify-between">
      <div>
        Ln: {lineNumber}, Col: {columnNumber}
      </div>
      <div>
        Python 3.9.12
      </div>
    </div>
  );
};

export default StatusBar;