import { IMovie } from '../api.service';

export enum MovieActionTypes {
  GetMovies = 'GET_MOVIES',
  GetMoviesSuccess = 'GET_MOVIES_SUCCESS',
  SearchMovie = 'SEARCH_MOVIE',
  SearchMovieSuccess = 'SEARCH_MOVIE_SUCCESS'
} 

export function getMovies() {
  return {
    type: MovieActionTypes.GetMovies
  }
}

export function getMoviesSuccess(payload: IMovie[]) {
  return {
    type: MovieActionTypes.GetMoviesSuccess,
      payload
  }
}

export function getSearchMovie() {
  return {
    type: MovieActionTypes.SearchMovie
  }
}

export function getSearchMovieSuccess(payload: IMovie[], searchValue: string) {
  return {
    type: MovieActionTypes.SearchMovieSuccess,
    payload,
    searchValue
  }
}