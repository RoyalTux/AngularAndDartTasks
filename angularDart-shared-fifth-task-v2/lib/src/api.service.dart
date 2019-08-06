import 'dart:convert';
import 'package:http/http.dart';

import 'api.response.dart';

class ApiService {
  Client client = Client();
  static String apiKey = 'c9b14b6a87dd35d703106b70a47ae123';
  Stream<List<Movie>> getTopMovies() => client
      .get(
      'https://api.themoviedb.org/3/trending/all/week?api_key=$apiKey&language=ru')
      .asStream().map((response) =>
  MoviesResponse.fromJson(json.decode(response.body)).results);
}