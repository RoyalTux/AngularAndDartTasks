import { getPosterPath, IMovie } from './api.service';
import { MovieInfoController } from './movie-info.controller';
import { MovieSearchController } from './movie-search.controller';
import store from './redux/store';
import { getMoviesEffect } from './redux/effects';

export class MovieController {
  private $view: HTMLElement;
  private $list: HTMLElement;
  private $searchInput: HTMLInputElement;
  constructor() {
    this.$view = document.getElementById('top-movies') as HTMLElement;
    this.$view.innerHTML = `
      <input type="text" id="search-movie" placeholder="Search movie..."/>
      <div id="movies-list"></div>
      `;
    this.$list = document.getElementById('movies-list') as HTMLElement;
    this.$list.addEventListener('click', (e: Event) => this.handleMovieClick(e));
    this.$searchInput = document.getElementById('search-movie') as HTMLInputElement;
    this.handleOpenSearchMovie = this.handleOpenSearchMovie.bind(this);
  }

  private initStore() {
    store.subscribe(async () => {
      const state = await store.getState();
      if (state.movies.data.length > 0) {
        this.renderTopMovies(state.movies.data, this.$list)
      }
      });
    store.dispatch(getMoviesEffect());
  }

  private renderTopMovies (responseResults: IMovie[], el: HTMLElement) {
    const html = responseResults.reduce((all, current) =>
    all += `
      <div>
        <img src="${getPosterPath(current.poster_path)}"/>
        <p>Title: ${current.original_title}</p>
        <span>Vote average: ${current.vote_average}</span>
        <button data-id="${current.id}">More info...</button>
      </div>
      `, '');
    el.innerHTML = html;
  }

  private initSearchMovie() {
    this.$searchInput.addEventListener('change', this.handleOpenSearchMovie.bind(this));
    this.$searchInput.addEventListener('submit', this.handleOpenSearchMovie.bind(this));
  }

  private async handleOpenSearchMovie() {
    const searchValue = this.$searchInput.value;
    this.clear();
    const controller = new MovieSearchController(searchValue);
    controller.init()
  }

  private handleMovieClick(e:Event) {
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

  public init() {
    history.pushState(null, "Top Movies List", "/");
    this.initSearchMovie();
    this.initStore();
  }

  private clear() {
    this.$view.innerHTML = '';
    this.$list.removeEventListener('click', this.handleMovieClick);
    this.$searchInput.removeEventListener('change', this.handleOpenSearchMovie);
    this.$searchInput.removeEventListener('submit',this.handleOpenSearchMovie);
  }
}