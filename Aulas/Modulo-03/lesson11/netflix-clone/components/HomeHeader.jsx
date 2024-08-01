import React, { useEffect, useRef } from "react";
import { MdOutlineCastConnected } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { logout } from "../src/firebase";

const HomeHeader = () => {
    const avatarName = localStorage.getItem('avatarName') || 'Usuário';
    const avatarPath = localStorage.getItem('avatarPath') || './components/imgs/default-avatar.jpg';

    const navRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add("bg-black/80");
            } else {
                navRef.current.classList.remove("bg-black/80");
            }
        });
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 w-full m-0 bg-none transition-all p-4 md:p-8 z-10 backdrop-blur-md rounded-b-2xl sm:bg-black/40 md:bg-black/60"
        >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                <div className="flex flex-col items-start w-full md:flex-row md:w-auto">
                    <div className="flex flex-col md:flex-row items-start md:items-center md:gap-4 w-full">
                        <div className="flex items-center w-full md:w-auto mb-2 md:mb-0">
                            <li className="flex items-center w-full px-4 py-1 m-0 text-left leading-2 hover:cursor-pointer">
                                <a
                                    onClick={() => { logout(); }}
                                    className="absolute top-3 left-7 bg-slate-700/80 backdrop-blur-lg rounded-lg px-5 py-2 opacity-0 hover:opacity-100 transition-all"
                                >
                                    <span className="flex items-center gap-2">
                                        <RiLogoutBoxFill className="text-xl" />
                                        <p className="font-semibold text-lg">Sair</p>
                                    </span>
                                </a>

                                <img
                                    className="rounded-md w-10 mr-4 hidden sm:block"
                                    src={avatarPath}
                                    alt="Avatar"
                                />
                                <p className="text-lg font-semibold">
                                    Para {avatarName}
                                </p>
                            </li>
                        </div>

                        <ul className="flex flex-wrap items-center justify-start gap-4 mt-2 md:mt-0 text-md font-light">
                            <li className="px-4 py-1 border-[0.1rem] border-gray-100/30 rounded-3xl text-center leading-2">
                                Series
                            </li>
                            <li className="px-4 py-1 border-[0.1rem] border-gray-100/30 rounded-3xl text-center leading-2">
                                Filmes
                            </li>
                            <li className="px-4 py-1 border-[0.1rem] border-gray-100/30 rounded-3xl text-center leading-2">
                                Categorias
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-4 text-2xl w-full md:w-auto mt-2 md:mt-0">
                    <MdOutlineCastConnected className="block xl:hidden" />
                    <FaSearch className="hover:cursor-pointer" />
                </div>
            </div>
        </nav>
    );
};

export default HomeHeader;
