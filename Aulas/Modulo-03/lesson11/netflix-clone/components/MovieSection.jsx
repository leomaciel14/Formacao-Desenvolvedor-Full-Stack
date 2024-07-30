import React from "react";
import Slider from "react-slick";
import HomeCardSmall from "../components/HomeCardSmall";
import { CustomNextArrow, CustomPrevArrow } from "./CustomArrows";

const MovieSection = ({ title, movies, handleCardClick }) => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="w-full py-2">
            <h2 className="text-xl py-2">{title}</h2>
            <Slider {...sliderSettings}>
                {movies.map((movie, index) => (
                    <div className="p-1" key={index} onClick={() => handleCardClick(movie)}>
                        <HomeCardSmall imgSrc={movie.poster_path} alt={movie.title} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MovieSection;
