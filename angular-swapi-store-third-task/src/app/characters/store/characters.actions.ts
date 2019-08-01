import { Action } from '@ngrx/store';
import { Character } from './../models/character';

export const CharactersActionTypes = {
  FetchCharacters: '[Characters] Fetch Characters',
  FetchCharactersSuccess: '[Characters] Fetch Characters Success',
  FetchCharactersError: '[Characters] Fetch Characters Error',
};

export class FetchCharacters implements Action {
  readonly type = CharactersActionTypes.FetchCharacters;

  constructor(public payload: {id: number}) {}
}

export class FetchCharactersSuccess implements Action {
  readonly type = CharactersActionTypes.FetchCharactersSuccess;

  constructor(public payload: {id: number, characters: Character[]}) {}
}

export class FetchCharactersError implements Action {
  readonly type = CharactersActionTypes.FetchCharactersError;

  constructor(public payload: any) {}
}

export type CharactersActions = 
  | FetchCharacters 
  | FetchCharactersSuccess
  | FetchCharactersError;