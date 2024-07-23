import { useState } from "react";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";

const MovieSearchEngine = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const apikey = "f2f6190f";

    const searchMovies = async () => {
        try {
            const response = await axios.get(
                `http://www.omdbapi.com/?s=${query}&apikey=${apikey}`,
            );
            setMovies(response.data.Search || []);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="flex flex-row items-center text-3xl font-bold text-gray-800 mb-6">
                <div className="mr-2">
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
                            <p className="text-gray-600">Year: {movie.Year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSearchEngine;
