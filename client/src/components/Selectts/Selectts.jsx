import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTemperaments,
  filtersData,
  setPage,
  selectedOrder,
  selectedOrigin,
  selectedTemperaments,
} from "../../redux/actions";
import style from "../Cards/CardsContainer.module.css";

export default function Selectts() {
  const temperaments = useSelector((state) => state.temperaments);
  const dog = useSelector((state) => state.dogs);
  const selecTemperaments = useSelector((state) => state.selecTemperaments);
  const dogOrigin = useSelector((state) => state.dogOrigin);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filtersData(orderedDogs));
    // eslint-disable-next-line
  }, [selecTemperaments, dogOrigin, order]);
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
        return a.name.localeCompare(b.name);
    }
  });

  const handleOrderChange = (event) => {
    const selecteedOrder = event.target.value;
    dispatch(setPage(1));
    switch (selecteedOrder) {
      case "A":
        dispatch(selectedOrder("asc"));
        break;
      case "Z":
        dispatch(selectedOrder("desc"));
        break;
      case "MAX":
        dispatch(selectedOrder("MaxWeight"));
        break;
      case "MIN":
        dispatch(selectedOrder("MinWeight"));
        break;
      default:
        dispatch(selectedOrder(""));
        break;
    }
  };
  const handleChange = (event) => {
    dispatch(selectedOrigin(event.target.value));
    dispatch(setPage(1));
  };

  const handleChangeTemp = (event) => {
    dispatch(selectedTemperaments(event.target.value));
    dispatch(setPage(1));
  };

  return (
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
  );
}
