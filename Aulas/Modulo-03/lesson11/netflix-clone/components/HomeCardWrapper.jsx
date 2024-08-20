import React, { useState, useRef } from "react";
import HomeCard from "../components/HomeCard";

const HomeCardWrapper = ({ movie, handleCardClick }) => {
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const startY = useRef(0);

    const handleMouseDown = (e) => {
        setIsDragging(false);
        startX.current = e.clientX;
        startY.current = e.clientY;
    };

    const handleMouseMove = (e) => {
        const dx = Math.abs(e.clientX - startX.current);
        const dy = Math.abs(e.clientY - startY.current);
        if (dx > 5 || dy > 5) {
            setIsDragging(true);
        }
    };

    const handleMouseUp = (e) => {
        const dx = Math.abs(e.clientX - startX.current);
        const dy = Math.abs(e.clientY - startY.current);
        if (dx <= 5 && dy <= 5) {
            handleClick();
        }
        setIsDragging(false);
    };

    const handleClick = () => {
        handleCardClick(movie);
    };

    return (
        <div
            className="p-2 sm:p-0"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <HomeCard movie={movie} handleCardClick={handleCardClick} />
        </div>
    );
};

export default HomeCardWrapper;
