// Home.tsx
import React from "react";
import ThemeToggler from "../../utils/ThemeToggler/ThemeToggler";
import { useTheme } from "../../utils/ThemeToggler/ThemeContext";

const Home: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <main
      className={`w-full h-full flex items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <ThemeToggler />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
};

export default Home;
