import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import Modal from "./Modal";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleLogin = () => {
        const user = JSON.parse(localStorage.getItem(email));
        if (user && user.password === password) {
            setError("");
            setModalMessage("Login bem-sucedido!");
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                onLogin();
            }, 2000);
        } else {
            setError("Credenciais inválidas");
        }
    };

    const handleCreateAccount = () => {
        if (localStorage.getItem(email)) {
            setError("Conta já existe");
        } else {
            localStorage.setItem(email, JSON.stringify({ email, password }));
            setError("");
            setModalMessage("Conta criada com sucesso!");
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                setIsCreatingAccount(false);
            }, 2000);
        }
    };

    return (
        <div className="px-4 flex flex-col md:flex-row sm:flex-col items-center justify-center m-auto bg-gradient-to-b from-indigo-600 to-blue-600 w-full h-full">
            <img
                src=".\imgs\ilustration-home.webp"
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-md md:mr-10 mb-10 md:mb-0"
                alt=""
            />
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white h-fit p-4 rounded-lg shadow-lg">
                <h1 className="flex mt-6 justify-center m-auto md:flex-row flex-col items-center text-3xl font-bold text-center text-gray-800 mb-6">
                    {isCreatingAccount ? "Crie sua Conta" : "Faça Login"}
                </h1>
                <div className="flex flex-col lg:items-start items-center justify-center">
                    {error && (
                        <div className="text-center font-bold text-red-500 mb-4">
                            {error}
                        </div>
                    )}
                    <label
                        className="text-black text-md font-semibold"
                        htmlFor="email"
                    >
                        E-mail:
                    </label>
                    <input
                        className="mb-6 p-2 border bg-white text-black border-sky-300 rounded-md w-full max-w-md"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="flex items-center justify-center m-auto">
                    </div>
                    <label
                        className="text-black text-md font-semibold"
                        htmlFor="password"
                    >
                        Senha:
                    </label>
                    <input
                        className="mb-6 p-2 border bg-white text-black border-sky-300 rounded-md w-full max-w-md"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    onClick={isCreatingAccount
                        ? handleCreateAccount
                        : handleLogin}
                    className="flex items-center m-auto px-3 py-2 font-semibold bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                    <div className="mr-1">
                        <FaUser />
                    </div>
                    {isCreatingAccount ? "Registrar" : "Login"}
                </button>

                <div className="flex flex-row items-center justify-center px-2 mx-2 mt-4 text-sm">
                    <button
                        onClick={() => setIsCreatingAccount(!isCreatingAccount)}
                        className="mr-2 font-semibold text-blue-500 hover:underline"
                    >
                        {isCreatingAccount
                            ? "Já tem uma conta? Faça login"
                            : "Crie sua conta"}
                    </button>

                    <button
                        onClick={() => alert("Termos aceitos")}
                        className="ml-2 text-gray-500 hover:underline"
                    >
                        Aceitar os Termos
                    </button>
                </div>
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

export default Login;
