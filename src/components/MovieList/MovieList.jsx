import {  useState } from "react";
import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


export default function MovieList({ movies }) {
 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'
  const location = useLocation();
  const notify = () => toast.error('Sorry, there are no movies matching your search query. Please try again!');
  
  
  return (
    <div>
      {loading && <b>Loading...</b>}
      {error && <b>Error fetching data</b>}
      <Toaster position="top-right" reverseOrder={false} />
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