import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaPlay, FaPlus } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { LuStar } from "react-icons/lu";
import { GrShareOption } from "react-icons/gr";
import './MovieModal.css';
import { useParams , useNavigate } from 'react-router-dom';

const MovieModalTest = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const closeModal = () => {
        let modalInfos = document.getElementById('infos');
        let modalContainer = document.getElementById('container');

        modalInfos.classList.remove('modal-infos-in');
        modalContainer.classList.remove('modal-container-in');

        setTimeout(() => {
            modalInfos.classList.add('modal-infos-out');
            modalContainer.classList.add('modal-container-out');
        }, 100);

        setTimeout(() => {
            setMovie(null);
            navigate(-1);
        }, 1100);
    };

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response0 = await fetch(`http://192.168.0.16:3000/0`);
                const response1 = await fetch(`http://192.168.0.16:3000/1`);

                const data0 = await response0.json();
                const data1 = await response1.json();

                // Combina todos os filmes de ambos os endpoints
                const allMovies = [
                    ...data0.flatMap(section => section.movies || data0),
                    ...data1.flatMap(section => section.movies || data1)
                ];

                // Filtra os filmes com base na consulta de pesquisa
                const filteredMovies = allMovies.filter(movie =>
                    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
                );

                // Encontra o filme específico pelo ID após a filtragem
                const movieData = filteredMovies.find(movie => movie._id === parseInt(id, 10));

                if (movieData) {
                    setMovie(movieData);
                } else {
                    console.error('Filme não encontrado');
                }
            } catch (error) {
                console.error('Erro ao buscar os dados do filme:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieData();
    }, [id, searchQuery]); // Adiciona searchQuery como dependência para refetch ao pesquisar

    if (loading) return <p>Carregando...</p>;
    if (!movie) return <p>Filme não encontrado</p>;

    return (
        <div className="fixed h-full w-full inset-0 flex items-center justify-center z-50">

            <div id="container" className="modal-container-in fixed h-full w-full inset-0 bg-black bg-opacity-50 backdrop-blur-sm" ></div>
            <div id="infos" className="modal-infos-in bg-gradient-to-b from-[#2C2B3B]/90 to-black/90 rounded-3xl max-w-full w-full h-[90vh] absolute bottom-0 overflow-auto">
                <button
                    className="z-30 absolute -top-1 -right-1 mt-4 mr-4 text-2xl bg-black/60 p-1 rounded-full text-gray-200 hover:text-gray-100"
                    onClick={closeModal}
                >
                    <IoClose />

                </button>

                <div className="relative w-fit h-fit rounded-2xl">
                    <img
                        src={movie.backdrop_path}
                        alt={movie.title}
                        className="block rounded-t-2xl w-full md:w-screen h-64 md:h-fit object-cover 2xl:max-h-[820px]"
                    />

                    <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/90 rounded-t-2xl">
                    </div>

                    <div className="absolute bottom-0 w-full flex flex-col justify-center pb-3 2xl:pb-12 pl-3 2xl:pl-8 text-left">
                        <h2 className="text-white text-2xl md:text-4xl xl:text-6xl 2xl:text-7xl font-bold z-20 pb-1">
                            {movie.title}
                        </h2>
                    </div>
                </div>

                <ul className="flex flex-col 2xl:flex-row gap-2 px-4 w-full items-center font-semibold mt-3">
                    <li className="w-full">
                        <button className="flex flex-row h-full w-full items-center justify-center bg-white hover:bg-gray-300 transition-all text-black px-4 py-2 rounded">
                            <FaPlay className="mr-1" /> Play
                        </button>
                    </li>
                    <li className="w-full">
                        <button className="flex flex-row h-full w-full items-center justify-center bg-gray-500/50 hover:bg-gray-600/80 transition-all text-white px-4 py-2 rounded">
                            <HiDownload className="mr-1 text-xl" /> Baixar
                        </button>
                    </li>
                </ul>

                <p className="text-gray-100 p-3 mb-4 text-sm">
                    {movie.overview}
                </p>

                <ul className="flex items-center justify-start gap-1 mb-4 text-xs font-light text-gray-300 pl-3">
                    {movie.genres.slice(0, 3).map((genre, index) => (
                        <li
                            key={index}
                            className="px-4 py-1 border-[0.1rem] border-gray-200/30 rounded-3xl text-center leading-2"
                        >
                            {genre}
                        </li>
                    ))}
                </ul>

                <ul className="flex items-center justify-around gap-4 mt-4 text-md font-light px-3">
                    <li className="flex flex-col items-center w-1/3 px-4 py-4 rounded-xl transition-all text-center leading-2 hover:bg-slate-600/50">
                        <FaPlus className="text-2xl mb-2" />
                        <p className="text-sm">Minha Lista</p>
                    </li>
                    <li className="flex flex-col items-center w-1/3 px-4 py-4 rounded-xl transition-all text-center leading-2 hover:bg-slate-600/50">
                        <LuStar className="text-2xl mb-2" />
                        <p className="text-sm">Avalie</p>
                    </li>
                    <li className="flex flex-col items-center w-1/3 px-4 py-4 rounded-xl transition-all text-center leading-2 hover:bg-slate-600/50">
                        <GrShareOption className="text-2xl mb-2" />
                        <p className="text-sm">Compartilhe</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MovieModalTest;
