import React from "react";
import Login from "./Login";
import Navegation from "./Navegation";
import Footer from "./Footer";

const LoginHome = () => {
    return (
        <>
            <div className="brightness-[.4] h-dvh bg-no-repeat fixed inset-0 bg-fit bg-top bg-[url('./src/assets/img-bg.jpg')]">
            </div>
            <div className="flex flex-col m-auto items-center justify-center relative z-10">
                <Navegation />
                <Login />
                <Footer />
            </div>
        </>
    );
};

export default LoginHome;
