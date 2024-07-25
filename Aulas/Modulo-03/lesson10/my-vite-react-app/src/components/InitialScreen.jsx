import React, { useEffect, useState } from "react";

const InitialScreen = ({ onTransitionEnd }) => {
    const [showTransition, setShowTransition] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTransition(true);
            const transitionTimer = setTimeout(() => onTransitionEnd(), 1500);
            return () => clearTimeout(transitionTimer);
        }, 2000);
        return () => clearTimeout(timer);
    }, [onTransitionEnd]);

    return (
        <div className="flex items-center justify-center w-full h-full bg-gradient-to-b from-indigo-600 to-blue-600">
            {!showTransition
                ? (
                    <div className="m-auto">
                        <div className="text-white text-4xl font-bold animate-pulse">
                            <img
                                className="w-72"
                                src=".\imgs\logo-white.webp"
                                alt=""
                            />
                        </div>
                        <p className="mt-6 text-center text-white">
                            Sempre pronto para ajudar
                        </p>
                    </div>
                )
                : (
                    <div className="text-white text-2xl transition-opacity duration-2000 opacity-100 flex flex-col items-center justify-center">
                        <img
                            className="w-64 -scale-x-100 "
                            src=".\imgs\loading.gif"
                            alt=""
                        />
                        <p>
                            Carregando...
                        </p>
                    </div>
                )}
        </div>
    );
};

export default InitialScreen;
