import React from "react";
import { logout } from "../src/firebase";
import { RiLogoutBoxFill } from "react-icons/ri";
import { PiUserSwitchFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom/dist";

const AccountMenu = () => {
    const avatarName = localStorage.getItem('avatarName') || 'Usuário';
    const avatarPath = localStorage.getItem('avatarPath') || './components/imgs/default-avatar.jpg';
    const navigate = useNavigate();

    const handleButtonClickSwithUsers = () => {
        localStorage.clear();
        navigate('/whowatch')
    }

    return (
        <div id="accountMenu" className="opacity-0 transition-all backdrop-blur-lg bg-black/90 rounded-xl w-56 absolute hidden sm:top-24 sm:left-10 py-5 sm:flex flex-col border-2 border-gray-100">
            <div className="flex flex-col gap-3">
                <ul className="px-3 flex flex-col gap-3 items-start justify-start w-full">
                    <li className="flex items-center justify-center mb-2">
                        <img src={avatarPath} alt="" className="w-8 rounded-md mr-3" />
                        <p className="font-semibold text-lg">Olá, {avatarName}!</p>
                    </li>

                    <hr className="bg-gray-700/50 border-0 h-px w-full " />

                    <li>
                        <a
                            onClick={handleButtonClickSwithUsers}
                            className="text-white"
                        >
                            <span className="flex items-center gap-2 hover:underline cursor-pointer">
                                <PiUserSwitchFill className="text-xl" />
                                <p className="font-normal text-base">Trocar Usuário</p>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => { logout(); localStorage.clear(); }}
                            className="text-white"
                        >
                            <span className="flex items-center gap-2 hover:underline cursor-pointer">
                                <RiLogoutBoxFill className="text-xl" />
                                <p className="font-normal text-base">Sair</p>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AccountMenu;