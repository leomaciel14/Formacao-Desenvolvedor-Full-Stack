import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { FaQrcode } from "react-icons/fa";

const QRCodeGenerator = () => {
    const [text, setText] = useState("");

    return (
        <div className="container flex flex-col items-center justify-center m-auto">
            <div className="mt-10 bg-white max-w-64 h-fit p-4 rounded-lg shadow-lg">
                <h1 className="flex md:flex-row flex-col items-center text-3xl font-bold text-center text-gray-800 mb-6">
                    <div className="m-2">
                        <FaQrcode />
                    </div>
                    Gerador de QR Code
                </h1>
                <input
                    type="text"
                    placeholder="Digite aqui o seu texto"
                    className="mb-4 p-2 border bg-white text-black border-gray-300 rounded-md w-full max-w-md"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            
            {text && (
                <div className="mt-6 bg-white max-w-64 max-h-64 p-8 rounded-lg shadow-lg">
                    <div className="flex m-auto bg-white rounded -translate-y-8">
                        <QRCodeSVG value={text} size={256} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default QRCodeGenerator;
