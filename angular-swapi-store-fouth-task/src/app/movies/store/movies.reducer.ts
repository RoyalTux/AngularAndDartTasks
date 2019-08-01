import { MoviesActions, MoviesActionTypes } from './movies.actions';
import { State, initialState, stateAdapter } from './movies.state';

export function reducer(state = initialState, action: MoviesActions): State {
  switch (action.type) {
    case MoviesActionTypes.FetchMovies: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case MoviesActionTypes.FetchMoviesSuccess: {
      return stateAdapter.upsertMany(action.payload, {
        ...state,
        loading: false,
      });
    }

    case MoviesActionTypes.FetchMoviesError: {
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