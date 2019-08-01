import { Action } from '@ngrx/store';
import { Movie } from './../models/movie';

export const MoviesActionTypes = {
  FetchMovies: '[Movies] Fetch Movies',
  FetchMoviesSuccess: '[Movies] Fetch Movies Success',
  FetchMoviesError: '[Movies] Fetch Movies Error',
};

export class FetchMovies implements Action {
  readonly type = MoviesActionTypes.FetchMovies;
}

export class FetchMoviesSuccess implements Action {
  readonly type = MoviesActionTypes.FetchMoviesSuccess;

  constructor(public payload: Movie[]) {}
}

export class FetchMoviesError implements Action {
  readonly type = MoviesActionTypes.FetchMoviesError;

  constructor(public payload: any) {}
}

export type MoviesActions = 
  | FetchMovies 
  | FetchMoviesSuccess
  | FetchMoviesError;