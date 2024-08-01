import React, { useState } from "react";
import { login, signup } from "../src/firebase";
import netflix_spinner from "../src/assets/netflix_spinner.gif";

const Login = () => {
    const [singState, setSingStare] = useState("Entrar");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const user_auth = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (singState === "Entrar") {
            await login(email, password);
        } else {
            await signup(name, email, password);
        }
        setLoading(false);
    };

    return (
        loading?<div className="absolute top-0 w-full h-dvh flex items-center justify-center bg-black/90 backdrop-blur-md">
            <img src={netflix_spinner} className="w-1/3 sm:w-32" alt="" />
        </div>:
        <div className="flex flex-col p-12 sm:w-[28rem] bg-black/60 rounded-md mb-12">
            <div className="p-4">
                <h1 className="text-4xl font-bold">{singState}</h1>
            </div>

            <div className="flex flex-col items-center w-full">
                <form className="flex flex-col max-w-72 w-full my-2">
                    {singState === "Registrar"
                        ? (
                            <div className="relative mb-4">
                                <input
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    id="name"
                                    className="w-full bg-gray/60 border border-gray-600 rounded-md p-4 focus:bg-blue-950/80 my-2 peer"
                                    type="text"
                                    placeholder=" "
                                    autoComplete="name"
                                    required
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-4 top-2 text-gray-500 transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-3 peer-focus:text-xs peer-focus:text-white peer-valid:top-3 peer-valid:text-xs peer-valid:text-white"
                                >
                                    Seu Nome
                                </label>
                            </div>
                        )
                        : null}

                    <div className="relative mb-4">
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            id="email"
                            className="w-full bg-gray/60 border border-gray-600 rounded-md p-4 focus:bg-blue-950/80 my-2 peer"
                            type="text"
                            placeholder=" "
                            autoComplete="email"
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 top-6 text-gray-500 transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-3 peer-focus:text-xs peer-focus:text-white peer-valid:top-3 peer-valid:text-xs peer-valid:text-white"
                        >
                            Seu Email
                        </label>
                    </div>

                    <div className="relative mb-4">
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            id="password"
                            className="w-full bg-gray/60 border border-gray-600 rounded-md p-4 focus:bg-blue-950/80 my-2 peer"
                            type="password"
                            placeholder=" "
                            autoComplete="password"
                            required
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-4 top-6 text-gray-500 transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-focus:top-3 peer-focus:text-xs peer-focus:text-white peer-valid:top-3 peer-valid:text-xs peer-valid:text-white"
                        >
                            Senha
                        </label>
                    </div>
                    <button
                        onClick={user_auth}
                        type="submit"
                        className="py-2 rounded-md transition-colors bg-[#ff0310] hover:bg-[#C11119]"
                    >
                        {singState}
                    </button>

                    <p className="py-4 text-center font-light">OU</p>

                    <button className="py-2 rounded-md bg-gray-200/30 hover:bg-gray-200/20 transition-colors">
                        Usar um código de acesso
                    </button>

                    <a
                        className="py-4"
                        href="#"
                        onClick={(event) => event.preventDefault()}
                    >
                        <p className="font-semibold text-center hover:underline hover:text-gray-400">
                            Esqueceu a senha?
                        </p>
                    </a>
                </form>
            </div>

            <div className="flex my-4">
                <input
                    type="checkbox"
                    className="scale-[1.4] rounded-sm mr-4 hover:bg-black"
                />
                <p className="text-lg">Lembre-se de mim</p>
            </div>

            {singState === "Entrar"
                ? (
                    <p className="text-gray-400 font-semibold py-2">
                        Novo por aqui?{" "}
                        <a
                            href="#"
                            className="font-bold text-gray-200 hover:text-gray-100 hover:underline"
                            onClick={(event) => {
                                event.preventDefault();
                                setSingStare("Registrar");
                            }}
                        >
                            Assine agora.
                        </a>
                    </p>
                )
                : (
                    <p className="text-gray-400 font-semibold py-2">
                        Já tem uma conta?{" "}
                        <a
                            href="#"
                            className="font-bold text-gray-200 hover:text-gray-100 hover:underline"
                            onClick={(event) => {
                                event.preventDefault();
                                setSingStare("Entrar");
                            }}
                        >
                            Entre agora.
                        </a>
                    </p>
                )}

            <p className="text-sm text-gray-500 pb-24">
                Esta página é protegida pelo Google reCAPTCHA para garantir que
                você não é um robô.{" "}
                <a
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    className="text-blue-600 hover:underline"
                >
                    Saiba mais.
                </a>
            </p>
        </div>
    );
};

export default Login;
