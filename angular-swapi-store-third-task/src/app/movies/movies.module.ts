import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './../api.service';
import { MoviesComponent } from './components/root/movies.component';
import { MoviesStoreModule } from './store';

@NgModule({
  imports: [
    CommonModule,
    MoviesStoreModule,
  ],
  declarations: [
    MoviesComponent,
  ],
  exports: [
    MoviesComponent,
  ],
  providers: [ 
    ApiService,
  ],
})
export class MoviesModule { }