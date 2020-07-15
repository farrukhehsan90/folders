import { actionTypes } from "../constants";
const { LOGIN, LOADING } = actionTypes;

const initialState = {
  user: {},
  loading: false
};

const searchReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: payload
      };
    case LOGIN:
      return { ...state, user: payload };

    default:
      return state;
  }
};

export default searchReducer;
