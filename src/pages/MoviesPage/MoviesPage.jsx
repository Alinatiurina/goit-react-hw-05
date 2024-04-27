import { Field, Form, Formik } from "formik";
import css from './MoviesPage.module.css';
import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react";

export default function MoviesPage() {
    const [query, setQuery] = useState(""); 

    const handleSearch = (query) => {
        setQuery(query);
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