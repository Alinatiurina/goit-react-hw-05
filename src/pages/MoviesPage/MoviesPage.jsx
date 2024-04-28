import { Field, Form, Formik } from "formik";
import css from './MoviesPage.module.css';
import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
    const [query, setQuery] = useState(""); 
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (query) => {
        setQuery(query);
        setSearchParams({ query: query });
    };

    return (
        <div className={css.container}>
            <Formik
                initialValues={{ query: "" }}
                onSubmit={(values, actions) => {
                    handleSearch(values.query);
                    actions.resetForm();
                }}
            >
                <Form className={css.form}>
                    <Field className={css.input}
                        type="text"
                        name="query"
                        placeholder="Search movies"
                    />
                    <button type="submit" className={css.button}>Search</button>
                </Form>
            </Formik>
            {query && <MovieList moviesQuery={query} />}
        </div>
    );
}