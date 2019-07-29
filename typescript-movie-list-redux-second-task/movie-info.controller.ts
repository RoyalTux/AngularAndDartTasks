import { getMovieInfo, IMovie, getPosterPath } from './api.service';
import { MovieController } from './movie.controller';

export class MovieInfoController {
  private $view: HTMLElement;
  private movieId: string;
  constructor(movieId: string) {
    this.$view = document.getElementById('movie-info') as HTMLElement;
    this.movieId = movieId;
    this.$view.addEventListener('click', (e: Event) => this.handleBackClick(e));
  }

  private async renderMovieInfo() {
    const movie: IMovie = await getMovieInfo(this.movieId);
    this.$view.innerHTML = `
      <button data-id="movie-info-back">Back</button>
      <div>
        <img src="${getPosterPath(movie.poster_path)}"/>
        <p>Title: ${movie.original_title}</p>
        <span>Vote average: ${movie.vote_average}</span>
        <p>Overview: ${movie.overview}</p>
      </div>
    `;
  }

  private handleBackClick(e:Event) {
    const el: HTMLElement = e.target as HTMLElement;
    if (el.dataset.id) {
      this.clear();
      new MovieController().init();
    }
  }

  public init() {
    history.pushState(null, "Movie Info", "movie?id=" + this.movieId);
    this.renderMovieInfo();
  }

  private clear() {
    this.$view.innerHTML = '';
    this.$view.removeEventListener('click', this.handleBackClick);
  }
}