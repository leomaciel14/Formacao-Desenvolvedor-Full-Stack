import React from "react";
import { MdOutlineCastConnected } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const HomeHeader = () => {
    return (
        <>
            <nav className="fixed top-0 w-full m-auto items-center p-8 z-10 bg-black/60 backdrop-blur-xl rounded-b-2xl">
                <ul className="flex items-center justify-between text-2xl">
                    <li>
                        Para Leonardo
                    </li>
                    <ul className="flex gap-4 text-2xl">
                        <li>
                            <MdOutlineCastConnected />
                        </li>
                        <li>
                            <FaSearch />
                        </li>
                    </ul>
                </ul>
                <ul className="flex items-center justify-start gap-4 mt-4 text-md font-light">
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
            </nav>
        </>
    );
};

export default HomeHeader;
