import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as Action from './movies.actions';
import * as selector from './movies.selectors';
import { ApiService } from './../../api.service';
import { MoviesStoreService } from './movies.store.service';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private moviesStoreService: MoviesStoreService,
  ) {}

  @Effect()
  fetchMovies$ = () => this.actions$.pipe(
    ofType<Action.FetchMovies>(Action.MoviesActionTypes.FetchMovies),
    switchMap(() => {
        return this.apiService.fetchMovies().pipe(
          map(movies => {
            let m = movies.results; 
            if (m) return new Action.FetchMoviesSuccess(m);
            else return new Action.FetchMoviesError('wrong response');
          })
        );
    })
  )
};