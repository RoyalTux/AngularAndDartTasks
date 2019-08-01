import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';

import * as Actions from './characters.actions';
import * as Selectors from './characters.selectors';

import { State } from './characters.state';
import { Character } from '../models/character';

@Injectable()
export class CharactersStoreService {

  constructor(private store$: Store<State>) { }

  private dispatchAction = (action) => this.store$.dispatch(action);
  
  dispatchFetchCharacters = (id) => this.dispatchAction(new Actions.FetchCharacters(id));
  
  selectData = () => this.store$.pipe(select(Selectors.getData));

  selectDataById = (id) => this.store$.pipe(select(Selectors.getDataById(id)));

  selectLoading = () => this.store$.pipe(select(Selectors.getLoading));
  
};