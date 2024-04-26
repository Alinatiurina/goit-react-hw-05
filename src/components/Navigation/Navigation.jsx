import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";


const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const classLink = ({isActive})=>{return isActive? css.active: css.link}


export default function Navigation() { 
    return (   
        <nav className={css.navContainer}>
            <ul className={css.navList}>
                <li><NavLink to="/" className={classLink}>
                    Home
                </NavLink></li>
                <li> <NavLink to="/movies" className={classLink}>
                    Movies
                </NavLink></li>
            </ul>
        </nav>

    );
}