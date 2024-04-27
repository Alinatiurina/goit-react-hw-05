import { useEffect, useState } from "react";
import { getMovieByQwery, GetMovies } from "../../../movies-api";
import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MovieList({ moviesQuery }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'
  const location = useLocation();

  useEffect(() => {
    async function fetchMovies() {
      try {
        setError(false);
        setLoading(true);
        let data;
        if (moviesQuery) {
          data = await getMovieByQwery(moviesQuery, 1);
        } else {
          data = await GetMovies();
        }
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [moviesQuery]);
  return (
    <div>
      {loading && <b>Loading...</b>}
      {error && <b>Error fetching data</b>}
      {movies.length > 0 && (
        <ul className={css.list}>
          {movies.map((movie) => (
            <li className={css.item} key={movie.id}>
              <Link className={css.navLink} to={`/movies/${movie.id}`} state={location}>
                <img className={css.image} src={movie.poster_path?[`https://image.tmdb.org/t/p/w500${movie.poster_path}`]:defaultImg} alt="" />
                <p className={css.link}>{movie.original_title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
