import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const HomeCard = ({ movie, handleCardClick }) => {
    const [imageSrc, setImageSrc] = useState(movie.poster_path);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1130px)");

        const handleMediaQueryChange = (e) => {
            if (e.matches) {
                setImageSrc(movie.backdrop_path);
                setIsLargeScreen(true);
            } else {
                setImageSrc(movie.poster_path);
                setIsLargeScreen(false);
            }
        };

        handleMediaQueryChange(mediaQuery);

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, [movie.poster_path, movie.backdrop_path]);

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    return (
        <div
            className="relative w-fit h-fit sm:h-screen border-2 border-gray-700/50 sm:border-none sm:rounded-none rounded-2xl cursor-pointer"
            onClick={() => handleCardClick(movie)}
        >
            <img
                className="block object-cover 2xl:object-bottom 2xl:w-screen xl:h-screen w-full 2xl:h-fit bg-cover rounded-2xl xl:w-full xl:border-none xl:rounded-none"
                src={imageSrc}
                alt={movie ? movie.title : "Default"}
            />
            <div className="absolute bottom-0 w-full h-full bg-gradient-to-t xl:bg-gradient-to-r from-black/90 from-20% xl:from-0% to-90% md:to-60% rounded-2xl xl:border-none xl:rounded-none">
            </div>

            <div className="absolute w-full sm:w-2/3 md:w-full xl:w-4/5 2xl:w-2/3 bottom-0 sm:bottom-6 left-0 h-full flex flex-col items-start justify-end pb-4">
                <div className="flex flex-col items-start justify-start w-full text-center text-white px-4 md:px-12 py-4">
                    <div className="w-full xl:w-2/5">
                        <h2 className="text-3xl md:text-6xl 2xl:text-8xl font-bold text-left">
                            {movie.title}
                        </h2>
                        <p className="text-lg mt-2 text-left">
                            {truncateText(movie.overview, 20)}
                        </p>
                        <ul className="flex items-start justify-start gap-1 my-4 xl:my-6 text-md font-light text-gray-300">
                            {movie.genres.slice(0, 2).map((
                                genre,
                                index,
                            ) => (
                                <li
                                    key={index}
                                    className="px-4 py-1 border-[0.1rem] border-gray-200/30 bg-gray-950/50 bg-blend-multiply backdrop-blur-md rounded-3xl text-center leading-2"
                                >
                                    {genre}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <ul className="flex gap-2 px-4 w-full sm:pl-12 sm:w-1/2 items-center justify-center font-semibold">
                    <li className="flex-grow">
                        <button className="flex flex-row h-full w-full items-center justify-center bg-white hover:bg-gray-300 transition-all text-black px-4 py-2 rounded">
                            <FaPlay className="mr-1" /> Play
                        </button>
                    </li>
                    <li className="flex-grow">
                        <button className="flex flex-row h-full w-full items-center justify-center bg-gray-500/50 hover:bg-gray-600/80 transition-all text-white px-4 py-2 rounded">
                            <FaPlus className="mr-1" /> Minha Lista
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomeCard;
