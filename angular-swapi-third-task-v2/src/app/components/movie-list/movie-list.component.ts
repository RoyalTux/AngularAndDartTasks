import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { MoviesService } from '../../services/movies.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies()
  }

  getMovies() {
    this.movies = this.moviesService.getMovies();
  }
}