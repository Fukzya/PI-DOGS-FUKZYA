import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <NavLink className={styles.NavLink} to={`/detail/${props.id}`}>
      <div className={styles.containerCard}>
        <h2>{props.name}</h2>
        <img className={styles.imageCard} src={props.image} alt="imagen"></img>
        <h4>{props.Temperaments}</h4>
        <h3>
          {props.minPeso}Kg - {props.maxPeso}Kg
        </h3>
      </div>
    </NavLink>
  );
};

export default Card;
