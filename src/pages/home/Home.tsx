import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import { useTheme } from "../../utils/ThemeToggler/ThemeContext";

const Home: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <>
      <Navbar />
      <main
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <section
          className={`w-96 h-96 p-12 rounded-md flex justify-center items-center ${
            darkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"
          }`}
        >
          <h1>test</h1>
        </section>
      </main>
    </>
  );
};

export default Home;
