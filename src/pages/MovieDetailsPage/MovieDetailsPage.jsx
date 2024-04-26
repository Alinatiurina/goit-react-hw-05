import { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { getMovieById } from "../../../movies-api";
import css from "./MovieDetailsPage.module.css"

export default function MovieDetailsPage() {
    const { moviesId } = useParams();
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        async function fetchMovie() {
            try {
                const data = await getMovieById(moviesId);
                setMovie(data);
                console.log(data)
            } catch (error) { }
        }
        fetchMovie();
    }, [moviesId]);
    
    return (
        <div>
            {movie && (
                <div className={css.detailContainer}>
                    <img className={css.image} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                    <div className={css.infoContainer}>
                        <h2>{movie.original_title} {movie.release_date.split('-')[0]}</h2>
                        <p>User Score: {movie.vote_average}%</p>
                        <h3>Owerview</h3>
                        <p>{movie.overview}</p>
                        <h3>Geners</h3>
                        <ul>
                            {movie.genres.map(genre => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            <p>Additional information</p>
            <ul>
                <li><NavLink to='cast'>Cast</NavLink></li>
                <li><NavLink to='revievs'>Revievs</NavLink></li>
            </ul>
            <Outlet/>
        </div>);
    
}