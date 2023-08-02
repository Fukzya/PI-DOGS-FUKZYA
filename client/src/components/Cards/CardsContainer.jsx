import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getTemperaments, setPage } from "../../redux/actions";
import Pagination from "../Paginado/Paginado";

import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

export default function CardsContainer() {
  const temperaments = useSelector((state) => state.temperaments);
  const Paginado = useSelector((state) => state.pagination); //! Nos traemos nuestro estado de paginado
  const dog = useSelector((state) => state.dogs);
  const [selecTemperaments, setSelecTemperaments] = useState(""); //SE USA PARA EL FILTRO DE TEMPERAMENTOS
  const [dogOrigin, setDogOrigin] = useState(""); //SE USA PARA EL FILTRO DE CREACIONES
  const [order, setOrder] = useState(""); //SE USA PARA EL ORDENAMIENTO
  const dispatch = useDispatch();

  const { thisPage, itemsPerPage } = Paginado;

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setPage(1));
  }, [selecTemperaments, dogOrigin, dispatch]);

  let dogCopy = dog instanceof Array ? [...dog] : [];

  switch (dogOrigin) {
    case "API":
      dogCopy = dogCopy.filter((dog) => typeof dog.Id === "number");
      break;
    case "DB":
      dogCopy = dogCopy.filter((dog) => typeof dog.Id === "string");
      break;
    default:
      break;
  }

  const filteredDogs = selecTemperaments
    ? dogCopy.filter(
        (dog) =>
          dog.Temperaments && dog.Temperaments.includes(selecTemperaments)
      )
    : dogCopy;

  const orderedDogs = filteredDogs.slice().sort((a, b) => {
    switch (order) {
      case "asc":
        return a.name.localeCompare(b.name);
      case "desc":
        return b.name.localeCompare(a.name);
      case "MaxWeight":
        return b.max_weight - a.max_weight;
      case "MinWeight":
        return a.max_weight - b.max_weight;
      default:
        return 0;
    }
  });

  const handleChange = (event) => {
    setDogOrigin(event.target.value);
  };

  const handleChangeTemp = (event) => {
    setSelecTemperaments(event.target.value);
  };

  const handleOrderChange = (event) => {
    const selectedOrder = event.target.value;
    switch (selectedOrder) {
      case "A":
        setOrder("asc");
        break;
      case "Z":
        setOrder("desc");
        break;
      case "MAX":
        setOrder("MaxWeight");
        break;
      case "MIN":
        setOrder("MinWeight");
        break;
      default:
        setOrder("");
        break;
    }
  };

  const totalPages = Math.ceil(orderedDogs.length / itemsPerPage); //! total de paginas redoneando hacia arriba
  const startIndex = (thisPage - 1) * itemsPerPage; //! cada card tiene un index empezando por 0
  const endIndex = startIndex + itemsPerPage; //! 8-16-24-32 etc
  const thisPageDogs = orderedDogs.slice(startIndex, endIndex); //!recorta el aray de perros en la seccion que le pase

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.selects}>
          <select onChange={handleOrderChange} className={style.select}>
            <option value="default">Default</option>
            <option value="A">A-Z Abc</option>
            <option value="Z">Z-A Abc</option>
            <option value="MAX">Max to Min Weight</option>
            <option value="MIN">Min to Max Weight</option>
          </select>
          <select
            className={style.select}
            value={dogOrigin}
            onChange={handleChange}
          >
            <option value="ALL">All</option>
            <option value="API">Api</option>
            <option value="DB">Created by User</option>
          </select>

          {temperaments && temperaments.length > 0 && (
            <select
              className={style.select}
              value={selecTemperaments}
              onChange={handleChangeTemp}
            >
              <option value="">All Temperaments</option>
              {temperaments.map((temp) => (
                <option value={temp.Nombre} key={temp.Nombre}>
                  {temp.Nombre}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className={style.containerCards}>
          {thisPageDogs && thisPageDogs.length > 0 ? (
            thisPageDogs.map((dog) => {
              return (
                <Card
                  id={dog.Id}
                  key={dog.Id}
                  name={dog.name}
                  image={dog.image}
                  maxPeso={dog.max_weight}
                  minPeso={dog.min_weight}
                  Temperaments={dog.Temperaments}
                  fromApi={dog.fromApi ? true : false}
                />
              );
            })
          ) : (
            <div>No dogs found.</div>
          )}
        </div>
      </div>
      {
        <div className={style.pagination}>
          <Pagination
            thisPage={thisPage}
            totalPages={totalPages}
            pageChange={handlePageChange}
          />
        </div>
      }
    </div>
  );
}
