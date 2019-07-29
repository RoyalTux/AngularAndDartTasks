import { getMovieInfo, getPosterPath, IMovie } from './api.service';
import { MovieController } from './movie.controller';

export class MovieInfoController {
  private $view: HTMLElement;
  private movieId: string;
  constructor(movieId: string) {
    this.$view = document.getElementById('movie-info') as HTMLElement;
    this.movieId = movieId;
    this.$view.addEventListener('click', (e: Event) => this.handleBackClick(e));
    this.initMovieInfo();
  }

  public async initMovieInfo() {
    const movie: IMovie = await getMovieInfo(this.movieId);
    this.$view.innerHTML = `
      <button data-id="back-button">Back</button>
      <div>
        <img src="${getPosterPath(movie.poster_path)}"/>
        <p><i>Name: </i>${movie.original_title}</p>
        <span><i>Rating: </i>${movie.vote_average}</span>
        <p><i>Overview: </i>${movie.overview}</p>  
      </div>
    `;
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
    history.pushState(null, "Movie Info", "movie?id=" + this.movieId);
  }
}