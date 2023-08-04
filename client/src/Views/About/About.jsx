import inicio from "./puppycoding.jpg";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.wawa}>
      <img
        className={styles.wiwo}
        src={inicio}
        height={"300px"}
        width={"300px"}
        alt="Imagen perrito"
      />
      <h1>Santiago Quintana</h1>
    </div>
  );
}
