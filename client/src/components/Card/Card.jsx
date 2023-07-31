import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`/detail/${props.id}`}>
      <div className={styles.card}>
        <div>Name:{props.name}</div>
        <img className={styles.imagen} src={props.image} alt="imagen"></img>
        <div>Temperaments: {props.Temperaments}</div>
        <div>Max Weight: {props.maxPeso}kg</div>
        <div>Min Weight: {props.minPeso}kg</div>
      </div>
    </Link>
  );
};

export default Card;
