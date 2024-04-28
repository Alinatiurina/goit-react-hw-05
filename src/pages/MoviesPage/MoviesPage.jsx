import { Field, Form, Formik } from "formik";
import css from './MoviesPage.module.css';
import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export default function MoviesPage() {
    const [query, setQuery] = useState(""); 
    const [searchParams, setSearchParams] = useSearchParams();
    const notify = () => toast.error('Please, enter your request!');
  

    const handleSearch = (query) => {
        if (query === "") { notify() }
        setQuery(query);
        setSearchParams({ query: query });
    };

    return (
        <div className={css.container}>
            <Formik
                initialValues={{ query: "" }}
                onSubmit={(values, actions) => {
                    handleSearch(values.query.trim().toLocaleLowerCase());
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
                <Toaster position="top-right" reverseOrder={false} />
                </Form>
            </Formik>
            {query && <MovieList moviesQuery={query} />}
        </div>
    );
}