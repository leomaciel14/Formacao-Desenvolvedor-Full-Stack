import React from "react";
import { IoClose } from "react-icons/io5";
import { FaPlay, FaPlus } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { LuStar } from "react-icons/lu";
import { GrShareOption } from "react-icons/gr";
import Slider from "react-slick";
import HomeCardSmall from "../components/HomeCardSmall";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrows";

const smallerSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
};

const MovieModal = ({ movie, onClose, movies, handleCardClick }) => {
    if (!movie) return null;

    return (
        <div className="fixed h-full w-full inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-gradient-to-b from-[#2C2B3B]/90 to-black/90 rounded-3xl max-w-full w-full h-[90vh] absolute bottom-0 overflow-auto">
                <button
                    onClick={onClose}
                    className="z-30 absolute -top-1 -right-1 mt-4 mr-4 text-2xl bg-black/60 p-1 rounded-full text-gray-200 hover:text-gray-100"
                >
                    <IoClose />
                </button>

                <div className="relative w-fit h-fit rounded-2xl">
                    <img
                        src={movie.backdrop_path}
                        alt={movie.title}
                        className="block rounded-t-2xl w-full h-64 object-cover"
                    />

                    <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/90 rounded-t-2xl">
                    </div>

                    <div className="absolute bottom-0 w-full flex flex-col justify-center pb-3 pl-3 text-left">
                        <h2 className="text-white text-2xl font-bold z-20 pb-1">
                            {movie.title}
                        </h2>
                    </div>
                </div>

                <ul className="flex flex-col gap-2 px-4 w-full items-center font-semibold mt-3">
                    <li className="w-full">
                        <button className="flex flex-row h-full w-full items-center justify-center bg-white hover:bg-gray-300 transition-all text-black px-4 py-2 rounded">
                            <FaPlay className="mr-1" /> Play
                        </button>
                    </li>
                    <li className="w-full">
                        <button className="flex flex-row h-full w-full items-center justify-center bg-gray-500/50 hover:bg-gray-600/80 transition-all text-white px-4 py-2 rounded">
                            <HiDownload className="mr-1 text-xl" /> Baixar
                        </button>
                    </li>
                </ul>

                <p className="text-gray-100 p-3 mb-4 text-sm">
                    {movie.overview}
                </p>

                <ul className="flex items-center justify-start gap-1 mb-4 text-xs font-light text-gray-300 pl-3">
                    {movie.genres.slice(0, 3).map((genre, index) => (
                        <li
                            key={index}
                            className="px-4 py-1 border-[0.1rem] border-gray-200/30 rounded-3xl text-center leading-2"
                        >
                            {genre}
                        </li>
                    ))}
                </ul>

                <ul className="flex items-center justify-around gap-4 mt-4 text-md font-light px-3">
                    <li className="flex flex-col items-center w-1/3 px-4 py-4 rounded-xl transition-all text-center leading-2 hover:bg-slate-600/50">
                        <FaPlus className="text-2xl mb-2" />
                        <p className="text-sm">Minha Lista</p>
                    </li>
                    <li className="flex flex-col items-center w-1/3 px-4 py-4 rounded-xl transition-all text-center leading-2 hover:bg-slate-600/50">
                        <LuStar className="text-2xl mb-2" />
                        <p className="text-sm">Avalie</p>
                    </li>
                    <li className="flex flex-col items-center w-1/3 px-4 py-4 rounded-xl transition-all text-center leading-2 hover:bg-slate-600/50">
                        <GrShareOption className="text-2xl mb-2" />
                        <p className="text-sm">Compartilhe</p>
                    </li>
                </ul>

                <div className="w-full px-3">
                    <h2 className="text-xl py-4">Séries Populares</h2>
                    {movies.length === 0
                        ? <p>Carregando séries populares...</p>
                        : (
                            <Slider {...smallerSliderSettings}>
                                {movies.map((movie, index) => (
                                    <div
                                        className="p-1"
                                        key={index}
                                        onClick={() => handleCardClick(movie)}
                                    >
                                        <HomeCardSmall
                                            imgSrc={movie.poster_path}
                                            alt={movie.title}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        )}
                </div>
            </div>
        </div>
    );
};

export default MovieModal;
