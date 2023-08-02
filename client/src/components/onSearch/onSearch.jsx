import { useState } from "react";
import { useDispatch } from "react-redux";
import { findDogByName } from "../../redux/actions";
import style from "./onSearch.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [dog, setDog] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    return setDog(value);
  };

  const handleSubmit = () => {
    dispatch(findDogByName(dog));
    return setDog("");
  };

  return (
    <div className={style.shCont}>
      <input
        type="search"
        placeholder="Search..."
        value={dog}
        onChange={handleChange}
      />
      <button onClick={() => handleSubmit()}>🔎</button>
    </div>
  );
}
///////////////////////////////////////////////////////////////////////////////
