import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';

import * as Actions from './movies.actions';
import * as Selectors from './movies.selectors';

import { State } from './movies.state';
import { Movie } from '../models/movie';

@Injectable()
export class MoviesStoreService {

  constructor(private store$: Store<State>) { }

  private dispatchAction = (action) => this.store$.dispatch(action);
  
  dispatchFetchMovies = () => this.dispatchAction(new Actions.FetchMovies());
  
  selectData = () => this.store$.pipe(select(Selectors.getData));

  selectEntities = () => this.store$.pipe(select(Selectors.getEntities));

  selectLoading = () => this.store$.pipe(select(Selectors.getLoading));
  
};