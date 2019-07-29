import './style.css';
import { MovieController } from './movie.controller';
import { MovieInfoController } from './movie-info.controller';
import { MovieSearchController } from './movie-search.controller';

class App {
  path: object; 
  constructor () {
    this.path = {
      '/': () => new MovieController(),
      '/movie': () => {
        const id: string = window.location.href.split("=")[1];
        return new MovieInfoController(id);
      },
      '/search': () => {
        const search: string = window.location.href.split("?")[1];
        return new MovieSearchController(search);
      }
    }
  }

  init() {
    const getRoute = this.path[window.location.pathname];
    getRoute().init();
  }
}

const app = new App();
app.init();