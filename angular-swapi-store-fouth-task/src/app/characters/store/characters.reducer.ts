import { CharactersActions, CharactersActionTypes } from './characters.actions';
import { State, initialState, stateAdapter } from './characters.state';

export function reducer(state = initialState, action: CharactersActions): State {
  switch (action.type) {
    case CharactersActionTypes.FetchCharacters: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case CharactersActionTypes.FetchCharactersSuccess: {
      return stateAdapter.upsertOne(action.payload, {
        ...state,
        loading: false,
      });
    }

    case CharactersActionTypes.FetchCharactersError: {
      return {
        ...state,
        loading: false,
        error: action.payload, 
      };
    }

    default: {
      return state;
    }
  }
}