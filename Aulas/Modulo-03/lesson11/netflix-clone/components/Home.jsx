import React from "react";
import Login from "../components/Login";
import Navegation from "../components/Navegation";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <div className="brightness-[.4] fixed inset-0 bg-auto bg-top bg-[url('./src/assets/img-bg.jpg')]">
            </div>
            <div className="flex flex-col m-auto items-center justify-center relative z-10">
                <Navegation />
                <Login />
                <Footer />
            </div>
        </>
    );
};

export default Home;
