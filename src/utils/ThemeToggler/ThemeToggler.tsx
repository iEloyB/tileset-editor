import React, { useContext } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { ThemeContext } from "./ThemeContext";

const ThemeToggler: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleDarkMode();
    if (darkMode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };

  return (
    <button
      className="w-10 h-10 fixed top-4 right-4 flex items-center justify-center rounded-lg bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700"
      onClick={handleToggle}
    >
      {darkMode ? (
        <BiSun className="w-6 h-6" />
      ) : (
        <BiMoon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggler;
