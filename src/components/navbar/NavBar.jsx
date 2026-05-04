import NavButton from "../btn/NavButton";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className={style.navContainer}>
      <NavLink to="/" className={style.logoContainer}>
        WHERE IS WALDO
      </NavLink>
      <div className={style.linksContainer}>
        <NavButton text={"home"} variant={"navLink"} route={"/"} />
        <NavButton
          text={"leader board"}
          variant={"navLink"}
          route={"/leader"}
        />
      </div>
    </div>
  );
}

export default NavBar;
