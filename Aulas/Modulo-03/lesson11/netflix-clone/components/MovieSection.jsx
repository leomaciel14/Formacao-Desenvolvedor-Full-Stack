import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import HomeCardSmall from "../components/HomeCardSmall";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrows";

const MovieSection = ({ title, movies, handleCardClick }) => {
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const updateSlidesToShow = () => {
            const width = window.innerWidth;

            switch (true) {
                case width >= 2400:
                    setSlidesToShow(11);
                    break;
                case width >= 1130:
                    setSlidesToShow(7);
                    break;
                case width >= 768:
                    setSlidesToShow(4);
                    break;
                default:
                    setSlidesToShow(3);
                    break;
            }
        };

        updateSlidesToShow();
        window.addEventListener("resize", updateSlidesToShow);

        return () => {
            window.removeEventListener("resize", updateSlidesToShow);
        };
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        autoplay: false
    };

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    return (
        <div className="w-full py-2">
            <h2 className="text-xl py-2">{title}</h2>
            <Slider {...sliderSettings} className="overflow-visible">
                {movies.map((movie, index) => (
                    <div className="p-1 overflow-visible" key={index}>
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
            </Slider>
        </div>
    );
};

export default MovieSection;
