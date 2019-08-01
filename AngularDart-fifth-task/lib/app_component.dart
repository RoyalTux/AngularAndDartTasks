import 'package:angular/angular.dart';
import 'package:fifth_task/src/api.response.dart';
import 'package:fifth_task/src/api.service.dart';
import 'package:fifth_task/src/movie_info/movie_info.dart';


// AngularDart info: https://webdev.dartlang.org/angular
// Components info: https://webdev.dartlang.org/components

@Component(
  selector: 'my-app',
  styleUrls: ['app_component.css'],
  templateUrl: 'app_component.html',
  directives: [coreDirectives, MovieInfo],
  pipes: [commonPipes],
  providers: [ClassProvider(ApiService)]
)
class AppComponent implements OnInit{
  AppComponent(this._apiService);
  ApiService _apiService;

  Stream<List<Movie>> movies$;

  @ViewChild(MovieInfo)
  MovieInfo movie;

  @override
  void ngOnInit() {
    movies$ = _apiService.getTopMovies();
  }

  void handleOpenMovie(int id){
    print(id);
  }
}
