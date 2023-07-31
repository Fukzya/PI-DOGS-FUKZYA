import { useState } from "react";
import { useDispatch } from "react-redux";
import { findDogByName } from "../../redux/actions";

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
    <div>
      <input
        type="search"
        placeholder="Search..."
        value={dog}
        onChange={handleChange}
      />
      <button onClick={() => handleSubmit()}>aaaa</button>
    </div>
  );
}
///////////////////////////////////////////////////////////////////////////////
