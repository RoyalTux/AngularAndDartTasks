import 'dart:async';

import 'package:angular/angular.dart';

import '../api.response.dart';

@Component(
  selector: 'movie-info',
  templateUrl: 'movie_info.html',
)
class MovieInfo {
  @Input()
  Movie movie;

  final StreamController _open = StreamController<int>();
  @Output()
  Stream get open => _open.stream;

  void handleOpenMovie(int id){
    _open.add(id);
  }
}


