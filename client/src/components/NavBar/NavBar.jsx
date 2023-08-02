import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../onSearch/onSearch";

const NavBar = () => {
  return (
    <div className={style.navCont}>
      <div>
        <Link to="/home">HOME</Link>
        <Link to="/form">CREATE</Link>
      </div>
      <SearchBar />
    </div>
  );
};

export default NavBar;
