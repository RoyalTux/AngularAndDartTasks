import { getPosterPath, IResponse, searchMovie } from './api.service';
import {MovieController} from './movie.controller';

export class MovieSearchController {
  private $view: HTMLElement;
  private $searchData: string;

  constructor(searchValue: string) {
    this.$view = document.getElementById('movie-search') as HTMLElement;
    this.$searchData = searchValue;
    this.initMovieSearch();
    this.$view.addEventListener('click', (e: Event) => this.handleBackClick(e));
  }

  private async initMovieSearch() {
    const response: IResponse = await searchMovie(this.$searchData);
    const html = response.results.reduce((all, current) =>
      all += `     
        <div>
          <img src="${getPosterPath(current.poster_path)}"/>
          <p><i>Name: </i>${current.original_title}</p>
          <span><i>Rating: </i>${current.vote_average}</span>
        </div>
      `, '');
    this.$view.innerHTML = '<button data-id="back-button">Back</button>' + html;
  }
    private handleBackClick(e: Event) {
    const el: HTMLElement = e.target as HTMLElement;
    if (el.dataset.id) {
      history.pushState(null, "Top Movie List", "/");
      this.clear();
      const controller = new MovieController();
      controller.init();
    }
  }

  private clear() {
    this.$view.innerHTML = '';
    this.$view.removeEventListener('click', this.handleBackClick);
  }

  public init() {
    history.pushState(null, "Search Movie Results", "search?" + this.$searchData);
  }
}