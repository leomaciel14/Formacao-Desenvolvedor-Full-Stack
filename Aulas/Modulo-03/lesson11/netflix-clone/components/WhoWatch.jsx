import React from "react";
import { CiSquarePlus } from "react-icons/ci";

const WhoWatch = () => {
    return (
        <>
            <div className="bg-black w-full h-full flex flex-col font-sans text-2xl text-center">
                <div className="w-full h-full">
                    <div className="mt-10">
                        <p>Quem vai assistir?</p>
                    </div>

                    <div className="flex flex-col items-center justify-center w-dvw h-full m-auto p-4 pb-32">
                        <ul className="grid gap-1 grid-cols-2 sm:grid-cols-4 items-center justify-center">
                            <li className="flex flex-col items-center p-2 transition-all brightness-50 hover:brightness-100 hover:scale-105">
                                <img
                                    className="rounded-xl w-28"
                                    src="./components/imgs/avatar-01.jpg"
                                    alt=""
                                />
                                <p className="mt-2 text-2xl">Leonardo</p>
                            </li>
                            <li className="flex flex-col items-center p-2 transition-all brightness-50 hover:brightness-100 hover:scale-105">
                                <img
                                    className="rounded-xl w-28"
                                    src="./components/imgs/avatar-02.jpg"
                                    alt=""
                                />
                                <p className="mt-2 text-2xl">Família</p>
                            </li>
                            <li className="flex flex-col items-center p-2 transition-all brightness-50 hover:brightness-100 hover:scale-105">
                                <img
                                    className="rounded-xl w-28"
                                    src="./components/imgs/avatar-03.jpg"
                                    alt=""
                                />
                                <p className="mt-2 text-2xl">Juliana</p>
                            </li>
                            <li className="flex flex-col items-center p-2 transition-all brightness-50 hover:brightness-100 hover:scale-105">
                                <img
                                    className="rounded-xl w-28"
                                    src="./components/imgs/new-avatar.png"
                                    alt=""
                                />
                                <p className="mt-2 text-2xl">Novo Usuário</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhoWatch;
