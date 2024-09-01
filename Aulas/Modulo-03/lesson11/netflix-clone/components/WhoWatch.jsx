import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const WhoWatch = () => {
    const navigate = useNavigate();

    const handleAvatarSelect = (avatarPath, avatarName) => {
        localStorage.setItem('avatarSelected', true);
        localStorage.setItem('avatarPath', avatarPath);
        localStorage.setItem('avatarName', avatarName);
        navigate('/home');
    };

    return (
        <div className="bg-black w-full h-full flex flex-col font-sans text-2xl text-center">
            <div className="w-full h-full">
                <div className="mt-10">
                    <p>Quem vai assistir?</p>
                </div>

                <div className="flex flex-col items-center justify-center w-dvw h-full m-auto p-4 pb-32">
                    <ul className="grid gap-1 grid-cols-2 sm:grid-cols-4 items-center justify-center">
                        <li onClick={() => handleAvatarSelect('./components/imgs/avatar-01.jpg','Baby Boss')} className="flex flex-col items-center p-2 transition-all brightness-50 hover:brightness-100 hover:scale-105 cursor-pointer">
                            <img className="rounded-xl w-28" src="./components/imgs/avatar-01.jpg" alt="Baby Boss" />
                            <p className="mt-2 text-2xl">Baby Boss</p>
                        </li>
                        <li onClick={() => handleAvatarSelect('./components/imgs/avatar-02.jpg','Pingo')} className="flex flex-col items-center p-2 transition-all brightness-50 hover:brightness-100 hover:scale-105 cursor-pointer">
                            <img className="rounded-xl w-28" src="./components/imgs/avatar-02.jpg" alt="Pingo" />
                            <p className="mt-2 text-2xl">Pingo</p>
                        </li>
                        <li onClick={() => handleAvatarSelect('./components/imgs/avatar-03.jpg','Vi')} className="flex flex-col items-center p-2 transition-all brightness-50 hover:brightness-100 hover:scale-105 cursor-pointer">
                            <img className="rounded-xl w-28" src="./components/imgs/avatar-03.jpg" alt="Vi" />
                            <p className="mt-2 text-2xl">Vi</p>
                        </li>
                        <li className="flex flex-col items-center p-2 transition-all brightness-50 hover:brightness-100 hover:scale-105 cursor-pointer">
                            <img className="rounded-xl w-28" src="./components/imgs/new-avatar.png" alt="Novo Usuário" />
                            <p className="mt-2 text-2xl">Novo Usuário</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WhoWatch;
