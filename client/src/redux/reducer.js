import {
  GET_TEMPERAMENTS,
  GET_DOGS,
  GET_DETAIL_DOG,
  GET_DOGS_BY_ID,
  FIND_DOG_BY_NAME,
  CLEAN_CARD_DETAIL,
  CLEAN_DETAIL,
  DELETE_DOG,
  PUT_DOG,
  SET_PAGE,
  POST_DOG,
} from "./action-types";

const initialState = {
  dogs: [],
  dogId: {},
  temperaments: [],
  alldogs: [],
  detailDog: {},
  pagination: {
    thisPage: 1,
    itemsPerPage: 8,
  },
  res: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload, alldogs: action.payload };
    case GET_DOGS_BY_ID:
      return { ...state, dogId: action.payload };
    case POST_DOG:
      return { ...state, alldogs: [...state.dogs, action.payload] };
    case CLEAN_DETAIL:
      return { ...state, dogId: {} };
    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };
    case FIND_DOG_BY_NAME:
      return { ...state, dogs: action.payload };
    case GET_DETAIL_DOG:
      return { ...state, detailDog: action.payload };
    case CLEAN_CARD_DETAIL:
      return { ...state, detailDog: {} };
    case PUT_DOG:
      return { ...state };
    case DELETE_DOG:
      return { ...state, res: action.payload };
    case SET_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, thisPage: action.payload },
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
