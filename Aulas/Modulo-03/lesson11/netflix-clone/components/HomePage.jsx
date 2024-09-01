import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Slider from "react-slick";

import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import HomeCardWrapper from "./HomeCardWrapper";
import MovieSection from "./MovieSection";
import Footer from "../components/Footer";
import './Dots.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrows";
import HomeCardSmall from "../components/HomeCardSmall";

const ITEMS_PER_LOAD = 10;
const SECTIONS_PER_LOAD = 2;

const HomePage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    const [sections, setSections] = useState([]);
    const [displayedMovies, setDisplayedMovies] = useState([]);
    const [displayedSections, setDisplayedSections] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(ITEMS_PER_LOAD);
    const [sectionsToShow, setSectionsToShow] = useState(SECTIONS_PER_LOAD);

    const loadMoreRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://movies-api14.p.rapidapi.com/home';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '7f311c2e09mshc017e42e687ca8fp18b6f1jsnd6d263680c2e',
                    'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
                }
            };

            try {
                const cachedData = localStorage.getItem('moviesData');
                if (cachedData) {
                    const parsedData = JSON.parse(cachedData);
                    setSections(parsedData);
                    const allMovies = parsedData.flatMap(section => section.movies);
                    setMovies(allMovies);
                } else {
                    const response = await fetch(url, options);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const data = await response.json();
                    console.log(data);

                    setSections(data);
                    const allMovies = data.flatMap(section => section.movies);
                    setMovies(allMovies);

                    localStorage.setItem('moviesData', JSON.stringify(data));
                }
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const results = searchResults.length > 0 ? searchResults : movies;
        setDisplayedMovies(results.slice(0, itemsToShow));
    }, [movies, searchResults, itemsToShow]);

    useEffect(() => {
        setDisplayedSections(sections.slice(0, sectionsToShow));
    }, [sections, sectionsToShow]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setItemsToShow(prev => prev + ITEMS_PER_LOAD);
                    setSectionsToShow(prev => prev + SECTIONS_PER_LOAD);
                }
            },
            { threshold: 1.0 }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, [loadMoreRef]);

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

            const combinedResults = [...movieResults, ...sectionsResults];
            const uniqueResults = Array.from(new Set(combinedResults.map(movie => movie._id)))
                .map(id => combinedResults.find(movie => movie._id === id));

            setSearchResults(uniqueResults);
            setItemsToShow(ITEMS_PER_LOAD);
        } else {
            setSearchResults([]);
            setItemsToShow(ITEMS_PER_LOAD);
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
        <div className="w-full h-full flex-col items-center justify-start">
            <div className="min-h-screen w-full flex-col items-center justify-start bg-gradient-to-b from-[#2C2B3B] to-black fixed -z-10"></div>

            <HomeHeader onSearch={handleSearch} />

            {searchResults.length > 0 ? (
                <div className="mt-20 md:mt-28">
                    <div className={`sm:mt-0 w-full grid ${slidesToShow}`}>
                        {displayedMovies.map((movie, index) => (
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
                            {displayedMovies.map((movie, index) => (
                                <HomeCardWrapper
                                    key={index}
                                    movie={movie}
                                    handleCardClick={handleCardClick}
                                />
                            ))}
                        </Slider>
                    </div>

                    <div className="w-full px-4 h-fit">
                        {displayedSections.map((section, index) => (
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

            <div ref={loadMoreRef} className="w-full h-10"></div>

            <div className="flex w-full h-full justify-center m-0 pb-[120px] md:pb-0">
                <Footer />
            </div>

            <HomeFooter />
        </div>
    );
};

export default HomePage;
