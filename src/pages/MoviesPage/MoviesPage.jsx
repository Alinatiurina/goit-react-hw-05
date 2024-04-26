import { Field, Form, Formik } from "formik";
import css from './MoviesPage.module.css';
import { getMovieByQwery } from "../../../movies-api";

export default function MoviesPage() {
    return (
        <div className={css.container}>
            <Formik
                initialValues={{ query: "" }}
                onSubmit={(values, actions) => {
                    // if (values.query === "") { notify() }
                    onSearch(values.query);
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
                    {/* <Toaster position="top-right" reverseOrder={false} /> */}
                </Form>
            </Formik>  </div>
    );
}