import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './movie';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  public movie: any;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      const id = parseInt(param.get('id'));
      this.movie = this.moviesService.getMovie(id);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
