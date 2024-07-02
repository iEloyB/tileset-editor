// Home.tsx
import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import { useTheme } from "../../utils/ThemeToggler/ThemeContext";

const Home: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <main
      className={`w-full h-screen flex items-center flex-col ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
};

export default Home;
