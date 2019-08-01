import { createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Movie } from './../models/movie';
import { MoviesActions, MoviesActionTypes } from './movies.actions';

export interface State extends EntityState<Movie> {
  loading: boolean,
  error: string,
}

export const stateAdapter: EntityAdapter<Movie> = createEntityAdapter<Movie>({
  selectId: (movie => movie.episode_id),
  sortComparer: false,
});

export const initialState: State = stateAdapter.getInitialState({
  loading: false,
  error: null,
});

export const getState = createFeatureSelector<State>('movies');