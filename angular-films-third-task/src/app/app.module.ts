import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import {MoviesPageModule} from './movies-page/movies-page.module';
import {MoviesPageComponent} from './movies-page/movies-page.component';
import {MovieInfoModule} from './movie-info/movie-info.module'
import {MovieInfoComponent} from './movie-info/movie-info.component';
import { ApiService } from './services/api.service'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/films',
    pathMatch: 'full'
  },
  {
    path: 'films',
    component: MoviesPageComponent
  },
  {
    path: 'films/:id',
    component: MovieInfoComponent
  }
]

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    MoviesPageModule,
    RouterModule.forRoot(
      appRoutes, 
      {enableTracing: false}
    ),
    MovieInfoModule ,
    HttpClientModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiService]
})
export class AppModule { }
