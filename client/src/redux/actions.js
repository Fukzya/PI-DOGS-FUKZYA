import axios from "axios";

export const getDogs = () => {
  return async function (dispatch) {
    const res = await axios.get("http://localhost:3001/dogs");
    const dogs = res.data;
    dispatch({ type: "GET_DOGS", payload: dogs });
  };
};

export const getTemperaments = () => {
  return async function (dispatch) {
    const res = await axios.get(`http://localhost:3001/temperaments`);
    const temp = res.data;
    dispatch({ type: "GET_TEMPERAMENTS", payload: temp });
  };
};

export const getDogbyId = (id) => {
  return async function (dispatch) {
    const res = await axios.get(`http://localhost:3001/dogs/${id}`);
    const dogId = res.data;
    dispatch({ type: "GET_DOGS_BY_ID", payload: dogId });
  };
};
export const findDogByName = (name) => {
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    dispatch({ type: "FIND_DOG_BY_NAME", payload: res.data });
  };
};

export const cleanDetail = () => {
  return { type: "CLEAN_DETAIL" };
};

export const setPage = (page) => ({
  type: "SET_PAGE",
  payload: page,
});

export const postDog = ({
  name,
  max_height,
  min_height,
  max_weight,
  min_weight,
  life_span,
  temperaments,
  image,
}) => {
  return async function (dispatch) {
    try {
      console.log(temperaments);
      const response = await axios.post("http://localhost:3001/dogs", {
        name,
        max_height,
        min_height,
        max_weight,
        min_weight,
        life_span,
        image,
        temperaments,
      });
      dispatch({ type: "POST_DOG", payload: response.data });
      return response;
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};
