import { STORE_MOVIE } from "./actionTypes";

const initialState = {
  movies: [],
};

export const storingMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_MOVIE:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};
