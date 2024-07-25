import { useState } from "react";
import axios from "axios";
import { AiFillAlipaySquare } from "react-icons/ai";
import { AiOutlineCheck, AiOutlineSwap } from "react-icons/ai";

const LanguageTranslator = () => {
    const [text, setText] = useState("");
    const [translatedText, setTranslatedText] = useState(
        "O texto traduzido aparece aqui!",
    );
    const [sourceLang, setSourceLang] = useState("en");
    const [targetLang, setTargetLang] = useState("pt");

    const handleTranslate = async () => {
        try {
            const response = await axios.get(
                "https://api.mymemory.translated.net/get",
                {
                    params: {
                        q: text,
                        langpair: `${sourceLang}|${targetLang}`,
                    },
                },
            );
            setTranslatedText(response.data.responseData.translatedText);
        } catch (error) {
            console.log("Erro ao traduzir o texto: ", error);
        }
    };

    const handleSwapLanguages = () => {
        setSourceLang(targetLang);
        setTargetLang(sourceLang);
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
            <h1 className="flex md:flex-row flex-col items-center text-3xl font-bold text-center text-gray-800 mb-6">
                <div className="m-2">
                    <AiFillAlipaySquare />
                </div>
                Tradutor
            </h1>
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col flex-1">
                    <label htmlFor="sourceLang" className="text-gray-600 mb-2">
                        Source Language:
                    </label>
                    <select
                        id="sourceLang"
                        value={sourceLang}
                        onChange={(e) => setSourceLang(e.target.value)}
                        className="mb-4 p-2 border font-semibold bg-gray-200 border-gray-800 text-gray-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="it">Italian</option>
                        <option value="pt">Portuguese</option>
                    </select>

                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Escreva o texto aqui"
                        className="p-4 border bg-white border-gray-500 text-gray-800 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="flex flex-row lg:flex-col items-center justify-center">
                    <button
                        onClick={handleTranslate}
                        className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    >
                        <div className="flex items-center">
                            <AiOutlineCheck className="mr-2" />
                            Translate
                        </div>
                    </button>

                    <button
                        onClick={handleSwapLanguages}
                        className="mx-4 my-4 py-2 px-4 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
                    >
                        <AiOutlineSwap size={24} />
                    </button>
                </div>

                <div className="flex flex-col flex-1">
                    <label htmlFor="targetLang" className="text-gray-600 mb-2">
                        Target Language:
                    </label>
                    <select
                        id="targetLang"
                        value={targetLang}
                        onChange={(e) => setTargetLang(e.target.value)}
                        className="mb-4 p-2 border font-semibold bg-gray-200 border-gray-800 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="it">Italian</option>
                        <option value="pt">Portuguese</option>
                    </select>

                    <div className="p-4 bg-gray-100 rounded-lg">
                        <p className="text-gray-800 whitespace-pre-wrap">
                            {translatedText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageTranslator;
