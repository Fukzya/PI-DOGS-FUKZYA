import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getDogbyId,
  cleanDetail,
  deleteDog,
  getDogs,
} from "../../redux/actions";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Details.module.css";

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getDogbyId(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [id, dispatch]);

  const handleDelete = () => {
    dispatch(deleteDog(id));
    alert(`Breed dog: ${dogId.name} has been successfully eliminated`);
    dispatch(getDogs());
    return navigate("/home");
  };

  let dogId = useSelector((state) => state.dogId);
  return (
    <div className={styles.cardContainer}>
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
      {dogId.fromApi === true ? (
        <></>
      ) : (
        <div className={styles.containerButtos}>
          <Link to={`/formUpdate/${id}`}>
            <button className={styles.button1}>Update</button>
          </Link>
          <button className={styles.button2} onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Details;
