import React from "react";
import { FaHome } from "react-icons/fa";
import { MdMovieFilter } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { logout } from "../src/firebase";

const HomeFooter = () => {
    const avatarPath = localStorage.getItem('avatarPath') || './components/imgs/default-avatar.jpg';

    return (
        <nav className="fixed bottom-0 w-full m-auto items-center p-6 px-8 z-10 bg-black/60 backdrop-blur-xl sm:hidden">
            <ul className="flex items-center justify-around gap-4 mt-4 text-md font-light">
                <li className="flex flex-col items-center px-4 py-1 text-center leading-2">
                    <FaHome className="text-3xl" />
                    Home
                </li>
                <li className="flex flex-col items-center px-4 py-1 text-center leading-2">
                    <MdMovieFilter className="text-3xl" />
                    Sugestões
                </li>
                <li className="px-4 py-1 text-center leading-2 ">
                    <a
                        onClick={() => { logout(); }}
                        className="absolute top-3 right-7 m-auto bg-slate-700/80 backdrop-blur-lg rounded-lg px-5 py-2 opacity-0 hover:opacity-100 transition-all"
                    >
                        <span className="flex items-center gap-2">
                            <RiLogoutBoxFill className="text-xl" />
                            <p className="font-semibold text-lg">Sair</p>
                        </span>
                    </a>
                    <img
                        className="rounded-md w-7"
                        src={avatarPath}
                        alt="Avatar"
                    />
                    Perfil
                </li>
            </ul>
        </nav>
    );
};

export default HomeFooter;
