import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../onSearch/onSearch";

const NavBar = () => {
  return (
    <div className={style.navCont}>
      <Link to="/home">HOME</Link>
      <SearchBar />
      <Link to="/form">CREATE</Link>
    </div>
  );
};

export default NavBar;
