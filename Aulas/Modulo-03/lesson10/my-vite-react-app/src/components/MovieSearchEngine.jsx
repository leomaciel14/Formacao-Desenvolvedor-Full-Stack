import { useState } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";

const MovieSearchEngine = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const apikey = "f2f6190f";

    const searchMovies = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `http://www.omdbapi.com/?s=${query}&apikey=${apikey}`,
            );
            setMovies(response.data.Search || []);
        } catch (error) {
            console.log("Error: ", error);
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="flex md:flex-row flex-col items-center text-3xl font-bold text-center text-gray-800 mb-6">
                <div className="m-2">
                    <BiCameraMovie />
                </div>
                Pesquisa de Filmes e Séries
            </h1>

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies..."
                className="mb-4 p-2 border bg-white text-black border-gray-300 rounded-md w-full max-w-md"
            />
            <button
                onClick={searchMovies}
                className="flex items-center m-auto px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
                <div className="mr-1">
                    <AiOutlineSearch />
                </div>
                Search
            </button>

            {loading
                ? (
                    <div className="border bg-gray-200/60 border-gray-300 rounded-md shadow-lg p-4 max-w-sm w-full mx-auto mt-6">
                        <div className="animate-pulse flex flex-col items-center">
                            <div className="bg-gray-300/50 rounded-md h-40 w-full">
                            </div>
                            <div className="space-y-6 py-4 px-2 w-full">
                                <div className="h-2 w-full bg-gray-300 rounded">
                                </div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4 items-center">
                                        <div className="h-2 bg-gray-300/60 rounded col-span-2">
                                        </div>
                                        <div className="h-2 bg-gray-300/60 rounded col-span-1">
                                        </div>
                                    </div>
                                    <div className="h-2 bg-gray-300/60 rounded">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-screen-xl">
                        {movies.map((movie) => (
                            <div
                                key={movie.imdbID}
                                className="bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden"
                            >
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg text-gray-800 font-semibold mb-2">
                                        {movie.Title}
                                    </h3>
                                    <p className="text-gray-600 mb-1">
                                        Type: {movie.Type}
                                    </p>
                                    <p className="text-gray-600">
                                        Year: {movie.Year}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    );
};

export default MovieSearchEngine;
