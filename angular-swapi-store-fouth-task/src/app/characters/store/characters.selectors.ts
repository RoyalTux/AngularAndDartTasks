import { createSelector } from '@ngrx/store';
import { getState, State, stateAdapter } from './characters.state';
import { Character } from './../models/character';

const entitySelectors = stateAdapter.getSelectors(getState);

export const getData = createSelector(entitySelectors.selectAll, (data) => data);

export const getEntities = createSelector(entitySelectors.selectEntities, (data) => data);

export const getDataById = (id) => createSelector(entitySelectors.selectEntities, (data) => data[id]);

export const getLoading = createSelector(getState, (state: State) => state.loading);

export const getError = createSelector(getState, (state: State) => state.error);