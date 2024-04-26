import { GetMovies } from "../../movies-api";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";

export default function App() {
    return (
    <Layout>

        <Routes>
            <Route path="/" element={<HomePage/>} /> 
            <Route path="/movies" element={<MoviesPage/>} />
            <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<MovieCast/>} />
                <Route path="revievs" element={<MovieReviews/>} />
            </Route>
            <Route path="*" element={ <NotFound/>} />   
        </Routes>
        
    </Layout>
    )
}