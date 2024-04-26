import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Navigation />
      </header>
      {children}
    </div>
  );
}