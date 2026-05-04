import styles from "./Mark.module.css";

function Mark({cooCharacters}) {
  return <div className={styles.mark} style={{ left: `${cooCharacters.x}%`, top: `${cooCharacters.y}%` }}></div>;

}

export default Mark;