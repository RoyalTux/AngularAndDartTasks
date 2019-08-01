import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/components/root';
import { CharactersComponent } from './characters/components/root';

const routes: Routes = [
  { 
    path: '', 
    component: MoviesComponent 
  },
  { 
    path: 'characters/:id', 
    component: CharactersComponent 
  },
  { 
    path: '**', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [
    RouterModule,
  ],
})
export class RoutingModule { }