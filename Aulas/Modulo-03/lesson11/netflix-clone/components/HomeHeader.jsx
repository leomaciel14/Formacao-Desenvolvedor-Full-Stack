import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiLogoutBoxFill, RiArrowDropDownLine } from "react-icons/ri";
import AccountMenu from "./AccountMenu";

const HomeHeader = ({ onSearch }) => {
    const avatarName = localStorage.getItem('avatarName') || 'Usuário';
    const avatarPath = localStorage.getItem('avatarPath') || './components/imgs/default-avatar.jpg';

    const navRef = useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchOpen, setSearchOpen] = useState(false);

    const handleMenuOpen = () => {
        const accountMenu = document.getElementById('accountMenu');

        if (menuOpen) {
            accountMenu.classList.remove('opacity-100');
            accountMenu.classList.add('opacity-0');
        } else {
            accountMenu.classList.remove('opacity-0');
            accountMenu.classList.add('opacity-100');
        }

        setMenuOpen(!menuOpen);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add("bg-black/80");
            } else {
                navRef.current.classList.remove("bg-black/80");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 w-full m-0 bg-none transition-all p-4 md:p-8 z-10 backdrop-blur-md rounded-b-2xl sm:bg-black/40 md:bg-black/60"
        >
            <div className="flex flex-col justify-between w-full transition-all">
                <div className="flex flex-col items-start w-full md:flex-row md:w-auto">
                    <div className="flex flex-row items-center md:items-center md:gap-4 w-full">
                        <ul className="flex items-center w-full mb-2 md:mb-0">
                            <li>
                                <AccountMenu />
                                <div className="flex items-center justify-between w-full px-4 py-1 m-0 text-left leading-2 hover:cursor-pointer">
                                    <img
                                        className="rounded-md w-10 mr-4 hidden sm:block"
                                        src={avatarPath}
                                        alt="Avatar"
                                    />
                                    <p className="text-lg font-semibold flex items-center">
                                        Para {avatarName}
                                        <button onClick={handleMenuOpen}>
                                            <RiArrowDropDownLine className={`ml-3 bg-slate-50/10 rounded-full hidden sm:block ${menuOpen ? 'rotate-180' : 'rotate-0'} transition-all`} />
                                        </button>
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <li className="w-full flex flex-row items-center justify-end gap-4 text-2xl md:w-auto md:mt-0 transition-all">
                            <div className={`transition-all duration-300 ease-in-out ${searchOpen ? 'w-full h-full opacity-100' : 'w-0 h-0 opacity-0'} overflow-hidden flex items-center`}>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    placeholder="Pesquise..."
                                    className="px-4 py-1 border rounded-md w-full bg-black/60"
                                />
                            </div>

                            <FaSearch
                                className="hover:cursor-pointer text-2xl"
                                onClick={toggleSearch}
                            />
                        </li>

                    </div>
                </div>

            </div>
        </nav>
    );
};

export default HomeHeader;
