import axios from "axios";
import {
  GET_TEMPERAMENTS,
  GET_DOGS,
  GET_DETAIL_DOG,
  FILTERS_DATA,
  GET_DOGS_BY_ID,
  FIND_DOG_BY_NAME,
  CLEAN_CARD_DETAIL,
  CLEAN_DETAIL,
  DELETE_DOG,
  PUT_DOG,
  SET_PAGE,
  POST_DOG,
  SELECTED_TEMPS,
  DOG_ORIGIN,
  ORDER,
  CLEAN_FILTERS,
} from "./action-types";

export const getDogs = () => {
  return async function (dispatch) {
    const res = await axios.get("http://localhost:3001/dogs");
    const dogs = res.data;
    dispatch({ type: GET_DOGS, payload: dogs });
  };
};

export const filtersData = (data) => {
  return async function (dispatch) {
    dispatch({ type: FILTERS_DATA, payload: data });
  };
};
export const selectedTemperaments = (data) => {
  return async function (dispatch) {
    dispatch({ type: SELECTED_TEMPS, payload: data });
  };
};
export const selectedOrigin = (data) => {
  return async function (dispatch) {
    dispatch({ type: DOG_ORIGIN, payload: data });
  };
};
export const selectedOrder = (data) => {
  return async function (dispatch) {
    dispatch({ type: ORDER, payload: data });
  };
};

export const getTemperaments = () => {
  return async function (dispatch) {
    const res = await axios.get(`http://localhost:3001/temperaments`);
    const temp = res.data;
    dispatch({ type: GET_TEMPERAMENTS, payload: temp });
  };
};

export const getDogbyId = (id) => {
  return async function (dispatch) {
    const res = await axios.get(`http://localhost:3001/dogs/${id}`);
    const dogId = res.data;
    dispatch({ type: GET_DOGS_BY_ID, payload: dogId });
  };
};

export const findDogByName = (name) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/dogs?name=${name}`);
      dispatch({ type: FIND_DOG_BY_NAME, payload: res.data });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const getDetailDog = (id) => {
  return async function (dispatch) {
    const response = (await axios.get(`http://localhost:3001/dogs/${id}`)).data;
    return dispatch({ type: GET_DETAIL_DOG, payload: response });
  };
};

export const cleanCardDetail = () => {
  return { type: CLEAN_CARD_DETAIL };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
export const cleanFilters = () => {
  return { type: CLEAN_FILTERS };
};

export const deleteDog = (id) => {
  return async function (dispatch) {
    const response = (await axios.delete(`http://localhost:3001/dogs/${id}`))
      .data;
    return dispatch({ type: DELETE_DOG, payload: response });
  };
};

export const putDog = (id, payload) => {
  console.log(id, payload);
  return async function (dispatch) {
    try {
      const response = (
        await axios.put(`http://localhost:3001/dogs/${id}`, payload)
      ).data;
      dispatch({ type: PUT_DOG });
      return response;
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert("The dog has not been Updated.");
      }
    }
  };
};

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const postDog = (props) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/dogs", {
        ...props,
      });
      alert("the dog breed was created successfully");
      dispatch({ type: POST_DOG, payload: response.data });
      return response;
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert("The dog has not been created.");
      }
    }
  };
};
