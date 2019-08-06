import 'package:json_annotation/json_annotation.dart';
part 'api.response.g.dart';

@JsonSerializable()
class MoviesResponse{
  MoviesResponse(this.results);
  List<Movie>results;

  factory MoviesResponse.fromJson(Map<String, dynamic> json) => _$MoviesResponseFromJson(json);
  Map<String, dynamic> toJson() => _$MoviesResponseToJson(this);

}

@JsonSerializable()
class Movie{
  Movie(this.id, this.originalTitle, this.title);
  int id;
  @JsonKey(name: 'original_name', nullable: true)
  String originalTitle;
  @JsonKey(nullable: true)
  String title;

  String get fullTitle => title ?? originalTitle;

  factory Movie.fromJson(Map<String, dynamic> json) => _$MovieFromJson(json);
  Map<String, dynamic> toJson() => _$MovieToJson(this);
}