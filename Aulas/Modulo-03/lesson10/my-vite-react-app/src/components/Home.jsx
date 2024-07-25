import { useState } from "react";
import LanguageTranslator from "./LanguageTranslator";
import MovieSearchEngine from "./MovieSearchEngine";
import QRCodeGenerator from "./QRCodeGenerator";
import IPAddressFinder from "./IPAddressFinder";
import { BiCameraMovie } from "react-icons/bi";
import { AiFillAlipaySquare } from "react-icons/ai";
import { FaQrcode } from "react-icons/fa";
import { FiMapPin, FiLogOut, FiHome } from "react-icons/fi";
import Modal from "./Modal";

const Home = () => {
    const [activeComponent, setActiveComponent] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleComponentChange = (component) => {
        setActiveComponent(component);
        setIsSidebarOpen(false);
    };

    const handleLogout = () => {
        setModalMessage("Logout realizado com sucesso!");
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
            window.location.reload();
        }, 2000);
    };

    const apps = [
        {
            name: "Tradutor",
            icon: <AiFillAlipaySquare size={40} />,
            component: "translator",
        },
        {
            name: "Pesquisa de Filmes",
            icon: <BiCameraMovie size={40} />,
            component: "movie",
        },
        {
            name: "QR Code Generator",
            icon: <FaQrcode size={40} />,
            component: "qrcode",
        },
        {
            name: "IP Address Finder",
            icon: <FiMapPin size={40} />,
            component: "ipfinder",
        },
    ];

    return (
        <div className="flex flex-1 bg-gray-100">
            <div
                className={`fixed inset-y-0 left-0 z-40 w-64 bg-blue-950 text-white shadow-3xl transform transition-transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 lg:relative lg:flex lg:flex-col`}
            >
                <div className="p-4 flex justify-between items-center lg:hidden">
                    <button
                        className="text-white hover:text-gray-200"
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
                            />
                        </svg>
                    </button>
                </div>
                <nav className="mt-6">
                    <ul className="flex flex-col justify-around">
                        {apps.map((app) => (
                            <li key={app.name}>
                                <button
                                    className={`flex items-center w-full text-left p-2 rounded-md ${
                                        activeComponent === app.component
                                            ? "bg-indigo-700/50"
                                            : "hover:bg-blue-600/50"
                                    }`}
                                    onClick={() =>
                                        handleComponentChange(app.component)
                                    }
                                >
                                    <div className="mr-2 scale-[0.9]">{app.icon}</div>
                                    {app.name}
                                </button>
                            </li>
                        ))}
                        <li className="mt-8 mb-4 bg-blue-900/50">
                            <button
                                className="flex items-center w-full text-left p-2 rounded-md hover:bg-blue-900"
                                onClick={handleLogout}
                            >
                                <div className="mr-2">
                                    <FiLogOut size={24} />
                                </div>
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="flex-1 flex flex-col p-0 text-black">
                <div className="bg-gradient-to-t from-indigo-600 to-blue-600 text-white p-4 flex justify-between items-center">
                    <button
                        className="text-white hover:text-gray-200 lg:hidden"
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
                            />
                        </svg>
                    </button>

                    <img src=".\imgs\logo-white.webp" className="w-44 m-auto" alt="" />

                    <button
                        className="text-white hover:text-gray-300"
                        onClick={() => handleComponentChange("")}
                    >
                        <FiHome size={24} />
                    </button>
                </div>

                <main
                    className={`h-full w-full overflow-y-auto ${
                        isSidebarOpen ? "blur-sm" : "blur-none"
                    }`}
                >
                    {activeComponent
                        ? activeComponent === "translator"
                            ? <LanguageTranslator />
                            : activeComponent === "movie"
                            ? <MovieSearchEngine />
                            : activeComponent === "qrcode"
                            ? <QRCodeGenerator />
                            : activeComponent === "ipfinder"
                            ? <IPAddressFinder />
                            : null
                        : (
                            <div className="grid grid-cols-2 leading-2 text-center md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                                {apps.map((app) => (
                                    <div
                                        key={app.name}
                                        className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition"
                                        onClick={() =>
                                            handleComponentChange(app.component)
                                        }
                                    >
                                        <div className="mb-2">{app.icon}</div>
                                        <div className="text-lg font-semibold">
                                            {app.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                </main>
            </div>
            {showModal && (
                <Modal
                    message={modalMessage}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default Home;
