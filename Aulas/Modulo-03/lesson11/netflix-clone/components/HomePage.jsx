import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Slider from "react-slick";

import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";

import HomeCardWrapper from "./HomeCardWrapper"
import MovieSection from "./MovieSection";

import Footer from "../components/Footer";

import './Dots.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrows";

import HomeCardSmall from "../components/HomeCardSmall";

const HomePage = () => {
    const location = useLocation();
    const navigate = useNavigate();


    const [movies, setMovies] = useState([]);
    const [sections, setSections] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    /*
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
        fetchSections();
    }, []);
    */

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch("http://192.168.0.16:3000/0");
                const data = await response.json();
                setMovies(data[0].movies.slice(0, 10));
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            }
        };

        const fetchSections = async () => {
            try {
                const response = await fetch("http://192.168.0.16:3000/1");
                const data = await response.json();
                setSections(data);
            } catch (error) {
                console.error("Erro ao buscar seções:", error);
            }
        };

        fetchMovies();
        fetchSections();
    }, []);

    const handleSearch = (query) => {
        if (query) {
            const movieResults = movies.filter(movie =>
                movie.title.toLowerCase().includes(query.toLowerCase())
            );

            const sectionsResults = sections.flatMap(section =>
                section.movies.filter(movie =>
                    movie.title.toLowerCase().includes(query.toLowerCase())
                )
            );

            const combinedResults = [...movieResults, ...sectionsResults]

            const uniqueResults = Array.from(new Set(combinedResults.map(movie => movie._id)))
                .map(id => combinedResults.find(movie => movie._id === id));

            setSearchResults(uniqueResults);
        } else {
            setSearchResults([]);
        }
    };

    const mainSliderSettings = {
        dots: true,
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
        navigate(`/movie/${movie._id}`, { state: { backgroundLocation: location } });
    };

    const [slidesToShow, setSlidesToShow] = useState('grid-cols-3');
    useEffect(() => {
        const updateCardsToShow = () => {
            const width = window.innerWidth;

            switch (true) {
                case width >= 2400:
                    setSlidesToShow('grid-cols-10');
                    break;
                case width >= 1130:
                    setSlidesToShow('grid-cols-6');
                    break;
                case width >= 768:
                    setSlidesToShow('grid-cols-4');
                    break;
                default:
                    setSlidesToShow('grid-cols-2');
                    break;
            }
        };

        updateCardsToShow();
        window.addEventListener("resize", updateCardsToShow);

        return () => {
            window.removeEventListener("resize", updateCardsToShow);
        };
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center justify-start">
            <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-b from-[#2C2B3B] to-black fixed -z-10"></div>

            <HomeHeader onSearch={handleSearch} />

            {searchResults.length > 0 ? (
                <div className="mt-20 md:mt-28">
                    <div className={`sm:mt-0 w-full grid ${slidesToShow}`}>
                        {searchResults.map((movie, index) => (
                            <div className="p-2 md:p-1 xl:p-2 overflow-visible" key={index}>
                                <HomeCardSmall
                                    title={movie.title}
                                    gender={movie.genres}
                                    releaseDate={movie.release_date}
                                    imgSrcBackdropp={movie.backdrop_path}
                                    imgSrc={movie.poster_path}
                                    alt={movie.title}
                                    onCardClick={() => handleCardClick(movie)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    <div className="mt-36 mb-5 sm:mt-0 w-full">
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

                    <div className="w-full px-4 h-fit">
                        {sections.map((section, index) => (
                            <MovieSection
                                key={index}
                                title={section.title}
                                movies={section.movies}
                                handleCardClick={handleCardClick}
                            />
                        ))}
                    </div>
                </>
            )}

            <div className="flex w-full h-full justify-center m-0 pb-[120px] md:pb-0">
                <Footer />
            </div>

            <HomeFooter />

        </div >
    );
};

export default HomePage;