import { store } from ".";
import { STORE_MOVIE } from "./actionTypes";

export const storeMovie = (addedMovie) => {
  const state = store.getState(); // State in normal js file => useSelector
  if (state.movies) {
    const isMovieFound = state.movies.some(
      (item) => item.Title === addedMovie.Title
    );
    if (isMovieFound) {
      return { type: STORE_MOVIE, payload: state.movies };
    } else {
      return { type: STORE_MOVIE, payload: [addedMovie, ...state.movies] };
    }
  } else {
    return {
      type: STORE_MOVIE,
      payload: [addedMovie],
    };
  }
};
