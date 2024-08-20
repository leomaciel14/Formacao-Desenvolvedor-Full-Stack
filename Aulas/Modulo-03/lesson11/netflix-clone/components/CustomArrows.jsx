import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomPrevArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={`${className} ml-10`}
            style={{ ...style, display: "block", background: "none" }}
            onClick={onClick}
        >
        </div>
    );
};

const CustomNextArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={`${className} custom-next-arrow mr-10`}
            style={{ ...style, display: "flex", background: "none" }}
            onClick={onClick}
        >
        </div>
    );
};

export { CustomPrevArrow, CustomNextArrow };
