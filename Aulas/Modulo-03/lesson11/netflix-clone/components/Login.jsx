import React, { useState } from "react";


const Login = () => {
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const validateForm = (e) => {
        e.preventDefault();
        const emailInput = document.getElementById("email").value;
        const passwordInput = document.getElementById("password").value;

        // Simple email validation
        const emailIsValid = /\S+@\S+\.\S+/.test(emailInput) || /^\d+$/.test(emailInput);

        // Check password length
        const passwordIsValid = passwordInput.length >= 4 && passwordInput.length <= 60;

        setEmailError(!emailIsValid);
        setPasswordError(!passwordIsValid);

        if (emailIsValid && passwordIsValid) {
            // Proceed with form submission or other logic
            console.log("Form is valid!");
        }
    };

    return (
        <div className="flex flex-col p-12 w-[28rem] bg-black/60 rounded-md mb-12">
            <div className="p-4">
                <h1 className="text-4xl font-bold">Entrar</h1>
            </div>

            <div className="flex flex-col items-center w-full">
                <form className="flex flex-col max-w-72 w-full my-2" onSubmit={validateForm}>
                    <div className="relative mb-4">
                        <input
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
                            Email ou número de celular
                        </label>
                        {emailError && (
                            <div className="flex items-center text-red-500 mt-1">
                                <AiOutlineCloseCircle className="mr-2" />
                                <p>Informe um email ou número de telefone válido.</p>
                            </div>
                        )}
                    </div>

                    <div className="relative mb-4">
                        <input
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
                        {passwordError && (
                            <div className="flex items-center text-red-500 mt-1">
                                <AiOutlineCloseCircle className="mr-2" />
                                <p>A senha deve ter entre 4 e 60 caracteres.</p>
                            </div>
                        )}
                    </div>
                    <button className="py-2 rounded-md transition-colors bg-[#ff0310] hover:bg-[#C11119]">
                        Entrar
                    </button>

                    <p className="py-4 text-center font-light">OU</p>

                    <button className="py-2 rounded-md bg-gray-200/30 hover:bg-gray-200/20 transition-colors">
                        Usar um código de acesso
                    </button>

                    <a className="py-4" href="">
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

            <p className="text-gray-400 font-semibold py-2">
                Novo por aqui?
                <a
                    href=""
                    className="font-bold text-gray-200 hover:text-gray-100 hover:underline"
                >
                    Assine agora.
                </a>
            </p>

            <p className="text-sm text-gray-500 pb-24">
                Esta página é protegida pelo Google reCAPTCHA para garantir que
                você não é um robô.{" "}
                <a href="" className="text-blue-600 hover:underline">
                    Saiba mais.
                </a>
            </p>
        </div>
    );
};

export default Login;
