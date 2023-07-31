const initialState = {
  dogs: [],
  dogId: [],
  temperaments: [],
  alldogs: [],
  pagination: {
    thisPage: 1,
    itemsPerPage: 8,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DOGS":
      return { ...state, dogs: action.payload, alldogs: action.payload };
    case "GET_DOGS_BY_ID":
      return { ...state, dogId: action.payload };
    case "POST_DOG":
      return { ...state, alldogs: [...state.dogs, action.payload] };
    case "CLEAN_DETAIL":
      return { ...state, dogId: {} };
    case "GET_TEMPERAMENTS":
      return { ...state, temperaments: action.payload };
    case "FIND_DOG_BY_NAME":
      return { ...state, dogs: action.payload };
    case "SET_PAGE":
      return {
        ...state,
        pagination: { ...state.pagination, thisPage: action.payload },
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
