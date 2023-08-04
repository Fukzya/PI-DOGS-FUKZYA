import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../onSearch/onSearch";
import { useDispatch } from "react-redux";
import { getDogs, setPage } from "../../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(getDogs());
    dispatch(setPage(1));
  };

  return (
    <div className={style.navCont}>
      <div>
        <Link className={style.childi} onClick={handleChange} to="/home">
          HOME
        </Link>
        <Link to="/form">CREATE</Link>
      </div>
      <SearchBar />
      <div>
        <Link to="/about">ABOUT</Link>
        <Link to="/">📤</Link>
      </div>
    </div>
  );
};

export default NavBar;
