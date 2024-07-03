import React, { useState } from "react";
import { BsFillImageFill, BsArrowsExpand } from "react-icons/bs"; // Importar iconos de React Icons
import Navbar from "../../components/Home/Navbar/Navbar";
import { useTheme } from "../../utils/ThemeToggler/ThemeContext";

const Home: React.FC = () => {
  const { darkMode } = useTheme();

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [width, setWidth] = useState<number>(32); // Default width
  const [height, setHeight] = useState<number>(32); // Default height
  const [boardWidth, setBoardWidth] = useState<number>(100); // Default board width
  const [boardHeight, setBoardHeight] = useState<number>(100); // Default board height

  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      if (["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
        setImageFile(file);
        setError(null);
      } else {
        setError("Please upload a valid image file (PNG or JPEG).");
      }
    }
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= 1000) {
      setWidth(value);
      setError(null);
    } else {
      setError("Width must be between 1 and 1000.");
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= 1000) {
      setHeight(value);
      setError(null);
    } else {
      setError("Height must be between 1 and 1000.");
    }
  };

  const handleBoardWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= 1000) {
      setBoardWidth(value);
      setError(null);
    } else {
      setError("Board width must be between 1 and 1000.");
    }
  };

  const handleBoardHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0 && value <= 1000) {
      setBoardHeight(value);
      setError(null);
    } else {
      setError("Board height must be between 1 and 1000.");
    }
  };

  const handleSubmit = () => {
    if (!imageFile) {
      setError("Please upload an image file.");
      return;
    }
    if (width <= 0 || width > 1000) {
      setError("Width must be between 1 and 1000.");
      return;
    }
    if (height <= 0 || height > 1000) {
      setError("Height must be between 1 and 1000.");
      return;
    }
    if (boardWidth <= 0 || boardWidth > 1000) {
      setError("Board width must be between 1 and 1000.");
      return;
    }
    if (boardHeight <= 0 || boardHeight > 1000) {
      setError("Board height must be between 1 and 1000.");
      return;
    }
    // Implementar lógica para navegar al editor o crear mapa
    console.log("Submit clicked");
    setError(null);
  };

  return (
    <>
      <Navbar />
      <main
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        } min-h-screen`}
      >
        <div className="container mx-auto px-4 py-8">
          <div
            className={`max-w-md mx-auto bg-${
              darkMode ? "gray-900" : "gray-400"
            } p-6 rounded-lg shadow-lg`}
          >
            <h2
              className={`text-2xl text-center font-semibold mb-4 text-${
                darkMode ? "white" : "gray-900"
              }`}
            >
              Create Map
            </h2>

            {error && (
              <div className="mb-4 text-red-500 text-center">{error}</div>
            )}

            {/* Image Upload */}
            <div className="mb-4">
              <label
                htmlFor="image"
                className={`block text-sm font-medium text-${
                  darkMode ? "white" : "gray-700"
                } mb-1 cursor-pointer bg-${
                  darkMode ? "gray" : "white"
                } py-2 px-3 rounded-lg border border-${
                  darkMode ? "gray-700" : "gray-400"
                } hover:bg-${darkMode ? "gray-800" : "gray-200"} hover:text-${
                  darkMode ? "white" : "black"
                } focus-within:outline-none flex items-center justify-center`}
              >
                <BsFillImageFill
                  className={`inline-block mr-2 mb-1 text-${
                    darkMode ? "white" : "gray-700"
                  }`}
                />
                Upload Image
                <input
                  type="file"
                  id="image"
                  accept=".png, .jpg, .jpeg"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              {imageFile && (
                <p
                  className={`mt-2 text-sm text-${
                    darkMode ? "white" : "gray-700"
                  }`}
                >
                  Selected file: {imageFile.name}
                </p>
              )}
            </div>

            <br />

            {/* Width and Height Inputs */}
            <div className="mb-4 flex">
              {/* Width */}
              <div className="flex-1 mr-2">
                <label
                  htmlFor="width"
                  className={`block text-sm font-medium text-${
                    darkMode ? "white" : "gray-700"
                  } mb-1`}
                >
                  <BsArrowsExpand
                    className={`inline-block mr-2 mb-1 text-${
                      darkMode ? "white" : "gray-700"
                    }`}
                  />
                  Width
                </label>
                <input
                  type="number"
                  id="width"
                  min="1"
                  max="1000"
                  className={`text-black appearance-none border border-${
                    darkMode ? "gray-700" : "gray-300"
                  } py-2 px-3 rounded-lg w-full`}
                  value={width}
                  onChange={handleWidthChange}
                />
              </div>

              {/* Height */}
              <div className="flex-1 ml-2">
                <label
                  htmlFor="height"
                  className={`block text-sm font-medium text-${
                    darkMode ? "white" : "gray-700"
                  } mb-1`}
                >
                  <BsArrowsExpand
                    className={`inline-block mr-2 mb-1 text-${
                      darkMode ? "white" : "gray-700"
                    }`}
                  />
                  Height
                </label>
                <input
                  type="number"
                  id="height"
                  min="1"
                  max="1000"
                  className={`text-black appearance-none border border-${
                    darkMode ? "gray-700" : "gray-300"
                  } py-2 px-3 rounded-lg w-full`}
                  value={height}
                  onChange={handleHeightChange}
                />
              </div>
            </div>

            <br />

            {/* Board Size Inputs */}
            <div className="mb-4 flex">
              {/* Board Width */}
              <div className="flex-1 mr-2">
                <label
                  htmlFor="boardWidth"
                  className={`block text-sm font-medium text-${
                    darkMode ? "white" : "gray-700"
                  } mb-1`}
                >
                  <BsArrowsExpand
                    className={`inline-block mr-2 mb-1 text-${
                      darkMode ? "white" : "gray-700"
                    }`}
                  />
                  Board Width (px)
                </label>
                <input
                  type="number"
                  id="boardWidth"
                  min="1"
                  max="1000"
                  className={`text-black appearance-none border border-${
                    darkMode ? "gray-700" : "gray-300"
                  } py-2 px-3 rounded-lg w-full`}
                  value={boardWidth}
                  onChange={handleBoardWidthChange}
                />
              </div>
              {/* Board Height */}
              <div className="flex-1 ml-2">
                <label
                  htmlFor="boardHeight"
                  className={`block text-sm font-medium text-${
                    darkMode ? "white" : "gray-700"
                  } mb-1`}
                >
                  <BsArrowsExpand
                    className={`inline-block mr-2 mb-1 text-${
                      darkMode ? "white" : "gray-700"
                    }`}
                  />
                  Board Height (px)
                </label>
                <input
                  type="number"
                  id="boardHeight"
                  min="1"
                  max="1000"
                  className={`text-black appearance-none border border-${
                    darkMode ? "gray-700" : "gray-300"
                  } py-2 px-3 rounded-lg w-full`}
                  value={boardHeight}
                  onChange={handleBoardHeightChange}
                />
              </div>
            </div>

            <br />

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none`}
                onClick={handleSubmit}
              >
                Create map
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
