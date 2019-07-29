import { getMovies, getMoviesSuccess, getSearchMovie, getSearchMovieSuccess } from './actions';
import { getTopMovies, searchMovie, IResponse } from '../api.service';

export function getMoviesEffect () {
  return async (dispatch, getState) => {
    dispatch(getMovies());
    const response: IResponse = await getTopMovies();
    dispatch(getMoviesSuccess(response.results));
  }
};

export function searchMovieEffect (searchValue: string) {
  return async (dispatch, getState) => {
    dispatch(getSearchMovie());
    const response: IResponse = await searchMovie(searchValue);
    dispatch(getSearchMovieSuccess(response.results, searchValue));
  }
}