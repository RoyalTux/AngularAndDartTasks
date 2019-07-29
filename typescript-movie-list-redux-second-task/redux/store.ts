import { createStore, combineReducers, applyMiddleware } from 'redux';
import { movieReducer } from './reducers/movie.reducer';
import { movieSearchReducer } from './reducers/movie-search.reducer';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const mainReducer = combineReducers({
  movies: movieReducer,
  search: movieSearchReducer
})

const logger = createLogger();

const store = createStore(
  mainReducer,
  applyMiddleware(thunk, logger)
);

export default store; 