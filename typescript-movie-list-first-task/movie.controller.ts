import { getTopMovies, getPosterPath, IResponse } from './api.service';
import { MovieInfoController } from './movie-info.controller';
import { MovieSearchController } from './movie-search.controller';

export class MovieController {
  private $view: HTMLElement;
  private $list: HTMLElement;
  private $search: HTMLInputElement;

  constructor() {
    this.$view = document.getElementById('top-movies') as HTMLElement;
    this.$view.innerHTML = `
      <input type="text" id="search-movie" placeholder="Enter movie title"/>
      <div id="movies-list"></div>
    `;
    this.$list = document.getElementById('movies-list') as HTMLElement;
    this.$list.addEventListener('click', (e: Event) => this.handleMovieClick(e));
    this.$search = document.getElementById('search-movie') as HTMLInputElement;
    this.handleOpenSearchMovie = this.handleOpenSearchMovie.bind(this);
  }

  private async topMovies() {
    const response: IResponse = await getTopMovies();
    const html = response.results.reduce((all, current) =>
      all += `
        <div>
          <img src="${getPosterPath(current.poster_path)}"/>
          <p><i>Name: </i>${current.original_title}</p>
          <span><i>Rating: </i>${current.vote_average}</span>
          <button class="movie-info-button" data-id="${current.id}">Info</button>
        </div>
      `, '');
    this.$list.innerHTML = html;
  }

  private initSearchMovie() {
    this.$search.addEventListener('change', this.handleOpenSearchMovie.bind(this));
    this.$search.addEventListener('submit', this.handleOpenSearchMovie.bind(this));
  }

  private async handleOpenSearchMovie() {
    const searchValue = this.$search.value;
    this.clear();
    const controller = new MovieSearchController(searchValue);
    controller.init()
  }

  private handleMovieClick(e: Event) {
    const el: HTMLElement = e.target as HTMLElement;
    if (el.dataset.id) {
      this.handleOpenMovieInfo(el.dataset.id);
    }
  }

  private handleOpenMovieInfo(movieId: string) {
    this.clear();
    const controller = new MovieInfoController(movieId);
    controller.init();
  }

  private clear() {
    this.$view.innerHTML = '';
    this.$list.removeEventListener('click', this.handleMovieClick);
    this.$search.removeEventListener('change', this.handleOpenSearchMovie);
    this.$search.removeEventListener('submit', this.handleOpenSearchMovie);
  }

  public init() {
    this.topMovies();
    this.initSearchMovie();
  }
}