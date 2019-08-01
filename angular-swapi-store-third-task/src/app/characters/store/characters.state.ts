import { createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Character } from './../models/character';
import { CharactersActions, CharactersActionTypes } from './characters.actions';

export interface State extends EntityState<Character[]> {
  loading: boolean,
  error: string,
}

export const stateAdapter: EntityAdapter<Character[]> = createEntityAdapter<Character[]>({
  sortComparer: false,
});

export const initialState: State = stateAdapter.getInitialState({
  loading: false,
  error: null,
});

export const getState = createFeatureSelector<State>('characters');