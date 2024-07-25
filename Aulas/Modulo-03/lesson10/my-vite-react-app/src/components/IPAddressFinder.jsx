import React, { useState } from "react";
import axios from "axios";
import { FiMapPin } from "react-icons/fi";

const IPAddressFinder = () => {
    const [ip, setIp] = useState("");
    const [ipData, setIpData] = useState(null);
    const [error, setError] = useState("");

    const fetchIpData = async () => {
        setError("");
        setIpData(null);
        try {
            const response = await axios.get(`https://ipinfo.io/${ip}/json`);
            setIpData(response.data);
        } catch (err) {
            setError(`Erro ao buscar informações do IP: ${err}`);
        }
    };
    return (
        <div className="container flex flex-col items-center justify-center m-auto">
            <div className="flex flex-col items-center justify-center m-auto mt-10 bg-white max-w-screen-md h-fit p-4 rounded-lg shadow-lg">
                <h1 className="flex md:flex-row flex-col items-center text-3xl font-bold text-center text-gray-800 mb-6">
                    <div className="m-2">
                        <FiMapPin />
                    </div>
                    Buscador de Endereço IP
                </h1>
                <input
                    type="text"
                    placeholder="Digite aqui o endereço de IP"
                    className="mb-4 p-2 border bg-white text-black border-gray-300 rounded-md w-full max-w-md"
                    value={ip}
                    onChange={(e) => setIp(e.target.value)}
                />

                <button
                    className="mb-4 p-2 bg-blue-500 text-white rounded"
                    onClick={fetchIpData}
                >
                    Buscar
                </button>
            </div>

            <div className="flex flex-col items-center justify-center m-auto max-w-screen-md h-fit p-4 mt-6">
                {(error || ipData) && (
                    <div className="bg-white w-full p-8 rounded-lg shadow-lg text-black">
                        {error && <div className="text-red-500">{error}</div>}
                        {ipData && (
                            <div>
                                <p>
                                    <strong>IP:</strong> {ipData.ip}
                                </p>
                                <p>
                                    <strong>Cidade:</strong> {ipData.city}
                                </p>
                                <p>
                                    <strong>Região:</strong> {ipData.region}
                                </p>
                                <p>
                                    <strong>País:</strong> {ipData.country}
                                </p>
                                <p>
                                    <strong>Org:</strong> {ipData.org}
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default IPAddressFinder;
