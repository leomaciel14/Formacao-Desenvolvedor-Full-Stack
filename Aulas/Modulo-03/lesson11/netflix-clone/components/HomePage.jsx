import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import HomeCard from "../components/HomeCard";
import MovieModal from "../components/MovieModal";
import MovieSection from "./MovieSection";

import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrows";

const HomePage = () => {
    const [sections, setSections] = useState([]);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    "https://movies-api14.p.rapidapi.com/shows",
                    {
                        method: "GET",
                        headers: {
                            "x-rapidapi-key":
                                "9101adee1amshef990cb5653d0e5p135c05jsnb90752bf20a8",
                            "x-rapidapi-host": "movies-api14.p.rapidapi.com",
                        },
                    },
                );

                const data = await response.json();
                setMovies(data.movies.slice(0, 10));
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            }
        };

        const fetchBannerMovies = async () => {
            try {
                const response = await fetch(
                    "https://movies-api14.p.rapidapi.com/movies",
                    {
                        method: "GET",
                        headers: {
                            "x-rapidapi-key":
                                "9101adee1amshef990cb5653d0e5p135c05jsnb90752bf20a8",
                            "x-rapidapi-host": "movies-api14.p.rapidapi.com",
                        },
                    },
                );

                const data = await response.json();
                setBannerMovies(data.movies.slice(0, 10));
            } catch (error) {
                console.error("Erro ao buscar filmes do banner:", error);
            }
        };

        const fetchSections = async () => {
            try {
                const response = await fetch(
                    "https://movies-api14.p.rapidapi.com/home",
                    {
                        method: "GET",
                        headers: {
                            "x-rapidapi-key":
                                "9101adee1amshef990cb5653d0e5p135c05jsnb90752bf20a8",
                            "x-rapidapi-host": "movies-api14.p.rapidapi.com",
                        },
                    },
                );
                const data = await response.json();
                setSections(data);
            } catch (error) {
                console.error("Erro ao buscar seções:", error);
            }
        };

        fetchMovies();
        fetchBannerMovies();
        fetchSections();
    }, []);

    const mainSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    const handleCardClick = (movie) => {
        setSelectedMovie(movie);
    };

    const closeModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-start">
            <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-b from-[#2C2B3B] to-black fixed -z-10"></div>

            <HomeHeader />

            <div className="mt-40 w-full px-2">
                <Slider {...mainSliderSettings}>
                    {movies.map((movie, index) => (
                        <HomeCardWrapper
                            key={index}
                            movie={movie}
                            handleCardClick={handleCardClick}
                        />
                    ))}
                </Slider>
            </div>

            <div className=" w-full px-4">
                {sections.map((section, index) => (
                    <MovieSection
                        key={index}
                        title={section.title}
                        movies={section.movies}
                        handleCardClick={handleCardClick}
                    />
                ))}
                {selectedMovie && (
                    <MovieModal
                        movie={selectedMovie}
                        onClose={closeModal}
                        movies={sections.flatMap(section => section.movies)}
                        handleCardClick={handleCardClick}
                    />
                )}
            </div>

            <div className=" flex items-center text-center justify-center m-auto p-4 w-1 h-full pb-36">
                Infos
            </div>

            <HomeFooter />
        </div>
    );
};

const HomeCardWrapper = ({ movie, handleCardClick }) => {
    return (
        <div className="p-2">
            <HomeCard movie={movie} handleCardClick={handleCardClick} />
        </div>
    );
};

export default HomePage;
