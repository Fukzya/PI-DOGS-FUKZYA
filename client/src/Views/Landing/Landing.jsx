import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import { useEffect } from "react";
import { getDogs } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Landing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(getDogs());
    };
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.containerButton}>
        <h1 className={style.text}>Welcome to dog web</h1>
        <Link to={"home"}>
          <button className={style.buttonLanding}>🐶 Find Your Buddy 🦴</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
