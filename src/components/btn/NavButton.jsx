import { NavLink } from "react-router-dom";
import style from "./Buttons.module.css";

function NavButton({ text, variant, onClick, route }) {
  return (
    <div className={style.btnContainer}>
      <NavLink
        to={route}
        className={({ isActive }) =>
          isActive ? `${style[variant]} ${style.navLinkActive}` : style[variant]
        }
        onClick={onClick}
      >
        <span>{text}</span>
      </NavLink>
    </div>
  );
}

export default NavButton;