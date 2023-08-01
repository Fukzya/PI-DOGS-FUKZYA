import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <h2>{props.name}</h2>
      <Link to={`/detail/${props.id}`}>
        <img className={styles.imagen} src={props.image} alt="imagen"></img>
      </Link>
      <h4>{props.Temperaments}</h4>
      <h3>
        {props.minPeso}Kg - {props.maxPeso}Kg
      </h3>
    </div>
  );
};

export default Card;
