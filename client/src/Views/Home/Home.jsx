import CardsContainer from "../../components/Cards/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
      <CardsContainer></CardsContainer>
    </div>
  );
}