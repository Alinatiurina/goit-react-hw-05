import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import {getMovieReviewById} from "../../../movies-api"


export default function MovieReviews() {
    const { moviesId } = useParams();
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        async function fetchMovie() {
            try {
                const data = await getMovieReviewById(moviesId);
                setMovie(data);
                console.log(data)
            } catch (error) { }
        }
        fetchMovie();
    }, [moviesId]);
    return (
        <div>
            {movie && (
                <ul>
                    {movie.map(rev => (
                        <li key={rev.id}>
                            <p>{rev.author}</p>
                            <p>{rev.content }</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}