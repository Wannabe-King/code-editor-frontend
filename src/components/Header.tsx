import React from "react";
import { Moon, Sun } from "lucide-react";
import { Dropdown, DropDownItem } from "./Dropdown";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const options: DropDownItem[] = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "C++", label: "C++" },
  { value: "Pyhton", label: "Pyhton" },
];

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-blue-500 text-white p-2 flex justify-between items-center">
      <div className="flex items-center">
        <div className="mr-2 text-yellow-300">
          {/* Python logo placeholder */}
          <span className="text-xl font-bold">🐍</span>
        </div>
        <h1 className="text-lg font-bold">
          ONLINE PYTHON{" "}
          <span className="bg-blue-700 text-white text-xs px-1 rounded">
            BETA
          </span>
        </h1>
      </div>
      <div className="flex items-center space-x-2">
        <Dropdown options={options} onChange={() => {}} />
        <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded text-sm flex items-center transition-colors duration-200">
          <span className="mr-1">✓</span> Try New IDE
        </button>
        <button
          onClick={toggleDarkMode}
          className="p-1 rounded-full hover:bg-blue-600 transition-colors duration-200"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
