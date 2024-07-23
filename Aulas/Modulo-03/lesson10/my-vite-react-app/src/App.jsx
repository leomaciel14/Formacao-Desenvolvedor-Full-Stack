import { useState } from "react";
import LanguageTraslator from "./components/LanguageTraslator";
import MovieSearchEngine from "./components/MovieSearchEngine";
import { BiCameraMovie } from "react-icons/bi";
import { AiFillAlipaySquare } from "react-icons/ai";
import "./App.css";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("translator");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
    setIsSidebarOpen(false); // Fechar o menu lateral ao mudar de componente
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white shadow-3xl transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:flex lg:flex-col`}
      >
        <div className="p-4 flex justify-between items-center lg:hidden">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              >
              </path>
            </svg>
          </button>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <button
                className={`flex items-center w-full text-left p-2 rounded-md ${
                  activeComponent === "translator"
                    ? "bg-gray-600"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => handleComponentChange("translator")}
              >
                <div className="mr-2">
                  <AiFillAlipaySquare />
                </div>
                Tradutor
              </button>
            </li>
            <li>
              <button
                className={`flex items-center w-full text-left p-2 rounded-md ${
                  activeComponent === "movie"
                    ? "bg-gray-600"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => handleComponentChange("movie")}
              >
                <div className="mr-2">
                  <BiCameraMovie />
                </div>
                Pesquisa de Filmes
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="bg-gray-950 text-white p-4 lg:hidden">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              >
              </path>
            </svg>
          </button>
        </div>

        <main className={`flex-1 p-6 overflow-y-auto ${isSidebarOpen ? "blur-sm" : "blur-none"}`}>
          {activeComponent === "translator" && <LanguageTraslator />}
          {activeComponent === "movie" && <MovieSearchEngine />}
        </main>
        </div>
    </div>
  );
};

export default App;
