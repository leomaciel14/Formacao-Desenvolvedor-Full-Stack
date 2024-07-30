import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const HomeCard = ({ movie, handleCardClick }) => {
    return (
        <div
            className="relative w-fit h-fit border-2 border-gray-700/50 rounded-2xl cursor-pointer"
            onClick={() => handleCardClick(movie)}
        >
            <img
                className="block rounded-2xl"
                src={movie
                    ? movie.poster_path
                    : "./components/imgs/Capa-01.jpg"}
                alt={movie ? movie.title : "Default"}
            />
            <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black to-60% rounded-2xl">
            </div>

            <div className="absolute bottom-0 w-full flex flex-col items-center justify-center pb-4">
                <ul className="flex items-center justify-start gap-1 mb-4 text-xs font-light text-gray-300 pl-3">
                    {movie.genres.slice(0, 2).map((genre, index) => (
                        <li
                            key={index}
                            className="px-4 py-1 border-[0.1rem] border-gray-200/30 rounded-3xl text-center leading-2"
                        >
                            {genre}
                        </li>
                    ))}
                </ul>
                <ul className="flex gap-2 px-4 w-full items-center justify-center font-semibold">
                    <li className="flex-grow">
                        <button className="flex flex-row h-full w-full items-center justify-center bg-white text-black px-4 py-2 rounded">
                            <FaPlay className="mr-1" /> Play
                        </button>
                    </li>
                    <li className="flex-grow">
                        <button className="flex flex-row h-full w-full items-center justify-center bg-gray-800/90 text-white px-4 py-2 rounded">
                            <FaPlus className="mr-1" /> Minha Lista
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomeCard;
