import { useEffect, useState } from "react";
import { GetMovies } from "../../../movies-api";
import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const data = await GetMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      {loading && <b>Loading...</b>}
      {error && <b>Error fetching data</b>}
      {movies.length > 0 &&
        <ul className={css.list}>
          {movies.map((movie) => (
            <li className={css.item} key={movie.id}>
              <Link className={css.navLink} to={`/movies/${movie.id}`}>
              <img className={ css.image} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                <p className={css.link}>{movie.original_title}</p>
              </Link>
            </li>
          ))}
        </ul>}      
    </div>
  );
}