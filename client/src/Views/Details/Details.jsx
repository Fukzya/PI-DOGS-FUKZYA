import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogbyId, cleanDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Details.module.css";

const Details = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getDogbyId(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [id, dispatch]);

  let dogId = useSelector((state) => state.dogId);
  return (
    <div className={styles.card}>
      <img className={styles.imagen} src={dogId.image} alt={"img"}></img>
      <h2>Name: {dogId.name}</h2>
      <h2>Id: {dogId.Id}</h2>
      <h3>Temperaments: {dogId.Temperaments}</h3>
      <h3>
        Height: {dogId.min_height}cm - {dogId.max_height}cm
      </h3>
      <h3>
        Weight: {dogId.min_weight}Kg - {dogId.max_weight}Kg
      </h3>
      <h3>LifeSpan: {dogId.life_span}</h3>
    </div>
  );
};

export default Details;
