import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const HomeCardSmall = ({ title, gender, releaseDate, imgSrcBackdropp, imgSrc, alt, onCardClick }) => {

    const date = new Date(releaseDate);
    const year = date.getFullYear();
    const gendersToShow = gender ? gender.slice(0, 2) : [];
    const gendersString = gendersToShow.join(', ');

    return (
        <div className="
            group
            col-span-1
            relative
            w-full
            h-auto
            overflow-visible
            cursor-pointer
        "
        onClick={onCardClick}
        >
            <img
                className="
                border-2
                border-gray-700/50
                rounded-md        
                cursor-pointer
                object-cover
                transition-all
                shadow-2xl
                duration-200
                group-hover:opacity-90
                sm:group-hover:opacity-70
                sm:group-hover:blur-sm
                delay-300
                w-full
                h-auto
                "
                src={imgSrc}
                alt={alt}
            />
            <div className="
                top-9
                opacity-0
                absolute
                transition-all
                duration-200
                z-10
                w-full
                h-full
                scale-0
                group-hover:scale-125
                group-hover:opacity-100
                overflow-visible
                shadow-4xl
            ">
                <img
                    className="
                    cursor-pointer
                    object-cover
                    transition-all
                    duration-200
                    rounded-t-md
                    w-full
                    "
                    src={imgSrcBackdropp}
                    alt={alt}
                />
                <div className="
                    z-20
                    bg-zinc-800
                    p-2
                    lg:p-4
                    absolute
                    w-full
                    transition-all
                    shadow-xl
                    rounded-b-md
                ">
                    <div className="flex flex-row items-center gap-2">
                        <div className="cursor-pointer w-8 h-8 min-h-7 min-w-7 bg-white rounded-full flex justify-center items-center transition-all hover:bg-neutral-300 ">
                            <BsFillPlayFill className="text-black text-xl" />
                        </div>
                        <p className="text-xs font-bold">{title}</p>
                    </div>
                    <p className="text-green-400 font-semibold text-xs mt-4">
                        Lançamento <span className="text-white"> {year}</span>
                    </p>
                    <div className="">
                        <p className="text-[0.6rem] text-gray-500">{gendersString}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCardSmall;
