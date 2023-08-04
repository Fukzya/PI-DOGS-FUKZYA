import CardsContainer from "../../components/Cards/CardsContainer";
import style from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";

export default function Home() {
  const PAG = useSelector((state) => state.pagination.thisPage);
  const selecTemperaments = useSelector((state) => state.selecTemperaments);
  const dogOrigin = useSelector((state) => state.dogOrigin);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      selecTemperaments === false &&
      dogOrigin === "ALL" &&
      order === "default" &&
      PAG === 1
    ) {
      console.log("BATMAN INICIA");
      dispatch(getDogs);
    }
  }, [dispatch]);

  return (
    <div className={style.home}>
      <CardsContainer></CardsContainer>
    </div>
  );
}
