import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieInfoComponent } from './movie-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MovieInfoComponent],
  exports: [MovieInfoComponent]
})
export class MovieInfoModule { }