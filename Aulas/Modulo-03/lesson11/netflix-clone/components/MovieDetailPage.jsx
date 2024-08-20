import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch('http://localhost:5000/0');
                const data = await response.json();
                const movies = data[0]?.movies;

                const foundMovie = movies.find(movie => movie._id === parseInt(id, 10))
                setMovie(foundMovie);
            } catch (error) {
                console.error('Erro ao buscar detalhes do filme:', error);
            }
        };

        const fetchSectionsDetails = async () => {
            try {
                const response = await fetch('http://localhost:5000/1');
                const data = await response.json();
                const sections = data[0]?.movies;

                const foundSections = sections.find(sections => sections._id === parseInt(id, 10))
                setMovie(foundSections);
            } catch (error) {
                console.error('Erro ao buscar detalhes do filme:', error);
            }
        };

        fetchSectionsDetails();        
        fetchMovieDetails();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.backdrop_path} alt={movie.title} />
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieDetailPage;
