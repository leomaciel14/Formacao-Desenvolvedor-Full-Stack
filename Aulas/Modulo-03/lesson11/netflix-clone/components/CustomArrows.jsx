import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomPrevArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={`${className} custom-prev-arrow`}
            style={{ ...style, display: "none", background: "none" }}
            onClick={onClick}
        >
            <FaChevronLeft className="arrow-icon" />
        </div>
    );
};

const CustomNextArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={`${className} custom-next-arrow`}
            style={{ ...style, display: "none", background: "none" }}
            onClick={onClick}
        >
            <FaChevronRight className="arrow-icon" />
        </div>
    );
};

export { CustomPrevArrow, CustomNextArrow };
