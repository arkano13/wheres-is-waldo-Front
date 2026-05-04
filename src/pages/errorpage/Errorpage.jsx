import { NavLink } from "react-router-dom";
import style from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <div className={style.page}>
      <div className={style.badge}>
        <div className={style.badgeDot}>
          <div className={style.badgeDotInner}></div>
        </div>
        <span className={style.badgeText}>error</span>
      </div>

      <h1 className={style.title}>404</h1>
      <div className={style.titleAccent}></div>

      <p className={style.subtitle}>
        the character is lost…<br />
        this page does not exist
      </p>

      <div className={style.nav}>
        <NavLink to="/" className={style.navLinkPrimary}>
          go home →
        </NavLink>

        <NavLink to="/leader" className={style.navLink}>
          leaderboard
        </NavLink>
      </div>
    </div>
  );
}

export default ErrorPage;