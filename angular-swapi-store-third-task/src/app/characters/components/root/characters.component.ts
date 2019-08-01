import { Component, OnInit } from '@angular/core';
import { CharactersStoreService } from './../../store/characters.store.service';
import { MoviesStoreService } from './../../../movies/store/movies.store.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  private characters$;
  private loading$;
  private id;

  constructor(
    private storeService: CharactersStoreService,
    private moviesStoreService: MoviesStoreService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.params.value['id'];
    this.moviesStoreService.dispatchFetchMovies();
    this.storeService.dispatchFetchCharacters(this.id);
    
    this.characters$ = this.storeService.selectDataById(this.id);
    this.loading$ = this.storeService.selectLoading();
  }

  onBackClick() {
    this.router.navigate([`/`]);
  }
}