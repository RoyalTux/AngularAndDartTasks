import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {ApiService} from '../services/api.service';
import {IFilm} from '../services/api.interface';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private router: Router
    ) { }

  films: IFilm[] = [];

  ngOnInit() {
    this.apiService.getFilms().subscribe((films)=>{
      this.films = films;
    });
  }

  handleOpenFilm(episodeId: number): void {
    this.router.navigateByUrl('/films/' + episodeId);
  }

}