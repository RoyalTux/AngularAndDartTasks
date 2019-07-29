import { IMovie } from './../../api.service';
import { MovieActionTypes } from '../actions';

interface ISearchMovieState {
  searchValue: string,
  data: IMovie[],
  loading: boolean
}

const initialState: ISearchMovieState = {
  searchValue: "",
  data: [],
  loading: false,
}

export function movieSearchReducer(state = initialState, action): ISearchMovieState {
  switch (action.type) {
    case MovieActionTypes.SearchMovie: {
      return {
        ...state,
        loading: true
      }
    }
    case MovieActionTypes.SearchMovieSuccess: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        searchValue: action.searchValue,
      }
    }
  }
  return state;
}