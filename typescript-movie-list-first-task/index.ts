import './style.css';
import { MovieController } from './movie.controller';
import { MovieInfoController } from './movie-info.controller';

class App {
  init(): void {
    const path: string = window.location.pathname;
    window.history.replaceState(null, "Top Movies List", "");
    if (path == "/") {
      const controller = new MovieController();
      controller.init();
    } else if (path == "/movie") {
      const id: string = window.location.href.split("=")[1];
      const controller = new MovieInfoController(id);
      controller.init();
    }
  };
}

const app = new App();
app.init();