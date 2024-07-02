import React from "react";
import { useTheme } from "../../../utils/ThemeToggler/ThemeContext";
import ThemeToggler from "../../../utils/ThemeToggler/ThemeToggler";

const Navbar: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <nav
      className={`w-full h-16 flex items-center justify-between px-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-400 text-black"
      }`}
    >
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 mr-2" />
        <h1 className="text-xl font-bold">Tilemanager</h1>
      </div>
      <ThemeToggler />
    </nav>
  );
};

export default Navbar;
