import { getPosterPath, IResponse, IMovie, searchMovie } from './api.service';
import { MovieController } from './movie.controller';
import store from './redux/store';
import { searchMovieEffect } from './redux/effects';

export class MovieSearchController {
  private $view: HTMLElement;
  private $list: HTMLElement;
  private $backButton: HTMLElement;
  private searchValue: string;
  constructor(searchValue: string) {
    this.$view = document.getElementById('movie-search') as HTMLElement;
    this.$view.innerHTML = `
      <button id="movie-search-back">Back</button>
      <div id="movie-search-list"></div>
    `;
    this.$list = document.getElementById('movie-search-list') as HTMLElement;
    this.$backButton = document.getElementById('movie-search-back') as HTMLElement;
    this.$backButton.addEventListener('click', (e: Event) => this.handleBackClick(e));
    this.searchValue = searchValue;
  }

  private initStore(searchValue: string) {
    store.subscribe(async () => {
    const state = await store.getState();
    if (state.search.data.length > 0 && state.search.searchValue === searchValue) {
    this.renderSearchMovies(state.search.data, this.$list)
    }
    });
    store.dispatch(searchMovieEffect(searchValue));
  }

  private renderSearchMovies (responseResults: IMovie[], el: HTMLElement) {
    const html = responseResults.reduce((all, current) =>
    all += `
      <div>
        <img src="${getPosterPath(current.poster_path)}"/>
        <p>Title: ${current.original_title}</p>
        <span>Vote average: ${current.vote_average}</span>
        </div>
    `, '');
    el.innerHTML = html;
  }

  private handleBackClick(e:Event) {
    this.clear();
    new MovieController().init();
  }

  public init() {
    history.pushState(null, "Search Results", "search?" + this.searchValue);
    this.initStore(this.searchValue);
  }

  private clear() {
    this.$view.innerHTML = '';
    this.$backButton.removeEventListener('click', this.handleBackClick);
  }
}