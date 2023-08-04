import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../redux/actions";
import Pagination from "../Paginado/Paginado";
import Selectts from "../Selectts/Selectts";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

export default function CardsContainer() {
  const filteredData = useSelector((state) => state.filtersData);
  const Paginado = useSelector((state) => state.pagination); //! Nos traemos nuestro estado de paginado
  const dispatch = useDispatch();

  const { thisPage, itemsPerPage } = Paginado;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage); //! total de paginas redoneando hacia arriba
  const startIndex = (thisPage - 1) * itemsPerPage; //! cada card tiene un index empezando por 0
  const endIndex = startIndex + itemsPerPage; //! 8-16-24-32 etc
  const thisPageDogs = filteredData.slice(startIndex, endIndex); //!recorta el aray de perros en la seccion que le pase

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };
  console.log(filteredData);
  return (
    <div>
      <div className={style.container}>
        <Selectts className={style.selects} />

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
