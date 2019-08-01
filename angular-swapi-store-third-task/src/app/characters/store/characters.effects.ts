import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, mergeMap, filter } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

import * as Action from './characters.actions';
import * as actionMovies from './../../movies/store/movies.actions';
import { MoviesStoreService } from './../../movies/store/movies.store.service';
import { ApiService } from './../../api.service';

@Injectable()
export class CharactersEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private moviesStoreService: MoviesStoreService,
  ) {}

  @Effect()
  fetchCharacters$ = () => this.actions$.pipe(
    ofType<Action.FetchCharacters>(Action.CharactersActionTypes.FetchCharacters),
    switchMap((action) => {
      let id = action.payload;
      return this.moviesStoreService.selectEntities().pipe(
        filter(entities => Object.keys(entities).length > 0),
        map(entities => entities[id]),
        map(entity => 
          (entity) 
          ? { id, data: entity } 
          : new Action.FetchCharactersError(`there's no entity with the id`)
        ) 
      );
    }),
    mergeMap((movie) => {
      let urls = movie.data.characters;
      let requests = [];    
      urls.forEach(url => requests.push(this.apiService.fetchCharacterByUrl(url)));
      
      return forkJoin(requests).pipe(
        map(characters => ({
          id: movie.id, 
          characters: characters,
        }))
      );
    }),
    map(result => {
      return new Action.FetchCharactersSuccess(result);
    })
  )
};