import styles from "./CharacterPanel.module.css";
import personaje1 from "../../assets/personaje1.png";
import personaje2 from "../../assets/personaje2.png";
import personaje3 from "../../assets/personaje3.png";

const characters = [
  { src: personaje1, name: "Personaje 1" },
  { src: personaje2, name: "Personaje 2" },
  { src: personaje3, name: "Personaje 3" },
];

function CharacterPanel() {
  return (
    <div className={styles.panel}>
      <span className={styles.label}>Buscá a:</span>
      {characters.map((char) => (
        <div key={char.name} className={styles.card}>
          <img src={char.src} alt={char.name} className={styles.img} />
          <span className={styles.name}>{char.name}</span>
        </div>
      ))}
    </div>
  );
}

export default CharacterPanel;