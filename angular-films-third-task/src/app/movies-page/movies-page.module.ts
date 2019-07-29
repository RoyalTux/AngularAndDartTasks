import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { MoviesPageComponent } from './movies-page.component';
import {FilmModule} from './components/film/film.module'

@NgModule({
  imports: [
    CommonModule,
    FilmModule,
    RouterModule
  ],
  declarations: [MoviesPageComponent],
  exports: [MoviesPageComponent]
})
export class MoviesPageModule { }