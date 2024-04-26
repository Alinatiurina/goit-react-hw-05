import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <p>Ooops! Page not found! </p>
            <p>Please go to <Link to="/">home page</Link> </p>
        </div>
    );
}