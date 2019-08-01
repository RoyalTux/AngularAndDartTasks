import { Component, OnInit } from '@angular/core';
import { MoviesStoreService } from './../../store/movies.store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  private movies$;
  private loading$;

  constructor(
    private storeService: MoviesStoreService,
    private router: Router) { }

  ngOnInit() {
    this.storeService.dispatchFetchMovies();
    
    this.movies$ = this.storeService.selectData();
    this.loading$ = this.storeService.selectLoading();
  }

  onClick(movie) {
    this.router.navigate([`/characters/${movie.episode_id}`]);
  }

}