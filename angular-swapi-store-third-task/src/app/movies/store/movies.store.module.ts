import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MoviesStoreService } from './movies.store.service';
import { MoviesEffects } from './movies.effects';
import { reducer } from './movies.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('movies', reducer),
    EffectsModule.forFeature([MoviesEffects]),
  ],
  exports: [
    StoreModule, 
    EffectsModule,
  ],
  providers: [
    MoviesStoreService,
  ],
})
export class MoviesStoreModule { }
