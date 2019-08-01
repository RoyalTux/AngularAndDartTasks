import { createSelector } from '@ngrx/store';
import { getState, State, stateAdapter } from './movies.state';
import { Movie } from './../models/movie';

const entitySelectors = stateAdapter.getSelectors(getState);

export const getData = createSelector(entitySelectors.selectAll, (data) => data);

export const getEntities = createSelector(entitySelectors.selectEntities, (data) => data);

export const getLoading = createSelector(getState, (state: State) => state.loading);

export const getError = createSelector(getState, (state: State) => state.error);