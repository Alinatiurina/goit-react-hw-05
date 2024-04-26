import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCastById } from "../../../movies-api";
import css from "./MovieCast.module.css"

export default function MovieCast() {
    const { moviesId } = useParams();
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        async function fetchMovie() {
            try {
                const data = await getMovieCastById(moviesId);
                setMovie(data);
                console.log(data)
            } catch (error) { }
        }
        fetchMovie();
    }, [moviesId]);

    return (
        <div>
            {movie && (
                <ul className={css.castList}>
                    {movie.map(cast => (
                        <li className={css.castItem} key={cast.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt="" />
                            <p>{cast.name}</p>
                            <p>Character: {cast.character}</p></li>
                    ))}
                </ul>
            )}
        </div>
    )
}