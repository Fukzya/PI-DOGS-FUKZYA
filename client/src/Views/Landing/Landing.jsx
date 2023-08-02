import { Link } from "react-router-dom";
import style from "./Landing.module.css";
const Landing = () => {
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
