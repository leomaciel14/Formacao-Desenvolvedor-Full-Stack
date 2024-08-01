import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="flex flex-row g-12 p-12 bg-gradient-to-t from-black from-85% to-black/70 w-full h-fit">
                <div className="w-2/3 flex flex-col md:flex-row justify-between text-neutral-400">
                    <div className="">
                        <p className="py-2 font-md">
                            Dúvidas? Ligue <a
                                href="tel:08005912876"
                                className="hover:underline"
                            >
                                0800 591 2876
                            </a>
                        </p>

                        <p className="py-2 font-sm underline">
                            <a href="">
                                Perguntas frequentes
                            </a>
                        </p>

                        <p className="py-2 font-sm underline">
                            <a href="">
                                Central de Ajuda
                            </a>
                        </p>

                        <p className="py-2 font-sm underline">
                            <a href="">
                                Termos de Uso
                            </a>
                        </p>
                    </div>

                    <div>
                    <p className="py-2 mt-10 font-sm underline">
                            <a href="">
                                Privacidade
                            </a>
                        </p>

                        <p className="py-2 font-sm underline">
                            <a href="">
                                Preferências de cookies
                            </a>
                        </p>
                        <p className="py-2 font-sm underline">
                            <a href="">
                                Informações corporativas
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
