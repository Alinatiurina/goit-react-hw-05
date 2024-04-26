import MovieList from "../../components/MovieList/MovieList";
import css from './HomePage.module.css'

export default function HomePage() {
    return (
        <div className={css.container}>
            <h1>Trending today</h1>
            <MovieList />
        </div>
    );
}