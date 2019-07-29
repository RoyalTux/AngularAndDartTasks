import { IMovie } from './../../api.service';
import { MovieActionTypes } from '../actions';

interface IMovieState {
  data: IMovie[],
  loading: boolean
}

const initialState: IMovieState = {
  data: [],
  loading: false,
}

export function movieReducer(state = initialState, action): IMovieState {
  switch (action.type) {
    case MovieActionTypes.GetMovies: {
      return {
        ...state,
        loading: true
      }
    }
    case MovieActionTypes.GetMoviesSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }
  }
  return state;
}