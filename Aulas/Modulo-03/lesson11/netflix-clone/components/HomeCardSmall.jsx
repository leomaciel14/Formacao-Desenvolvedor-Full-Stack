import React from "react";

const HomeCardSmall = ({ imgSrc, alt }) => {
    return (
        <div className="relative w-full h-auto border-2 border-gray-700/50 rounded-md overflow-hidden cursor-pointer">
            <img
                className="block w-full h-auto object-cover"
                src={imgSrc}
                alt={alt}
            />
        </div>
    );
};

export default HomeCardSmall;
