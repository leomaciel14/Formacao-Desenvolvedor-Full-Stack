import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ message, onClose }) => {
    return ReactDOM.createPortal(
        <div className="font-mono fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black opacity-50 absolute inset-0"></div>
            <div className="bg-white p-6 rounded-lg z-10 shadow-lg flex flex-col items-center justify-center">
                <h2 className="text-black text-2xl font-semibold mb-4">{message}</h2>
                <button
                    onClick={onClose}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Ok
                </button>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
