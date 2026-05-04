import styles from "./CharacterMenu.module.css";
import personaje1 from "../../assets/personaje1.png";
import personaje2 from "../../assets/personaje2.png";
import personaje3 from "../../assets/personaje3.png";

function CharacterMenu({ menuPosition, onSelect }) {
  if (!menuPosition) return null;
  return (
    <div className={styles.menu} style={{ left: `${menuPosition.x}%`, top: `${menuPosition.y}%` }}>
      <button
        className={styles.characterBtn}
        onClick={() => onSelect("personaje1")} 
      >
        <img src={personaje1} alt="personaje1" />
      </button>

      <button
        className={styles.characterBtn}
     onClick={() => onSelect("personaje2")} 
      >
        <img src={personaje2} alt="personaje2" />
      </button>

      <button
        className={styles.characterBtn}
     onClick={() => onSelect("personaje3")} 
      >
        <img src={personaje3} alt="personaje3" />
      </button>
    </div>
  );
}

export default CharacterMenu;