import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './../api.service';
import { CharactersComponent } from './components/root';
import { CharactersStoreModule } from './store';

@NgModule({
  imports: [
    CommonModule,
    CharactersStoreModule,
  ],
  declarations: [
    CharactersComponent,
  ],
  exports: [
    CharactersComponent,
  ],
  providers: [ 
    ApiService,
  ],
})
export class CharactersModule { }