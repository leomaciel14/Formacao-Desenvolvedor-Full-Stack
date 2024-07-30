import React from "react";
import { FaHome } from "react-icons/fa";
import { MdMovieFilter } from "react-icons/md";

const HomeFooter = () => {
    return (
        <>
            <nav className="fixed bottom-0 w-full m-auto items-center p-6 px-8 z-10 bg-black/60 backdrop-blur-xl">
                <ul className="flex items-center justify-around gap-4 mt-4 text-md font-light">
                    <li className="flex flex-col items-center px-4 py-1 text-center leading-2">
                        <FaHome className="text-3xl" />
                        Home
                    </li>
                    <li className="flex flex-col items-center px-4 py-1 text-center leading-2">
                        <MdMovieFilter className="text-3xl" />
                        Sugestões
                    </li>
                    <li className="px-4 py-1 text-center leading-2">
                        <img
                            className="rounded-md w-7"
                            src="./components/imgs/avatar-03.jpg"
                            alt=""
                        />
                        Perfil
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default HomeFooter;
