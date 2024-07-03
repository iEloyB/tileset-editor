// Home.tsx
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
        <section className="">
          <h1>test</h1>
        </section>
      </main>
    </>
  );
};

export default Home;
