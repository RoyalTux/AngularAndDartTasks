import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CharactersStoreService } from './characters.store.service';
import { CharactersEffects } from './characters.effects';
import { reducer } from './characters.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('characters', reducer),
    EffectsModule.forFeature([CharactersEffects]),
  ],
  exports: [
    StoreModule, 
    EffectsModule,
  ],
  providers: [
    CharactersStoreService,
  ],
})
export class CharactersStoreModule { }
