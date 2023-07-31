import { Link } from "react-router-dom";
import SearchBar from "../onSearch/onSearch";

const NavBar = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <Link to="/home">HOME</Link>
      <Link to="/form">CREATE</Link>
    </div>
  );
};

export default NavBar;
