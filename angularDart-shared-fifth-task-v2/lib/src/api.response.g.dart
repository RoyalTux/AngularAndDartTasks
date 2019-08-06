// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'api.response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

MoviesResponse _$MoviesResponseFromJson(Map<String, dynamic> json) {
  return MoviesResponse(
    (json['results'] as List)
        ?.map(
            (e) => e == null ? null : Movie.fromJson(e as Map<String, dynamic>))
        ?.toList(),
  );
}

Map<String, dynamic> _$MoviesResponseToJson(MoviesResponse instance) =>
    <String, dynamic>{
      'results': instance.results,
    };

Movie _$MovieFromJson(Map<String, dynamic> json) {
  return Movie(
    json['id'] as int,
    json['original_name'] as String,
    json['title'] as String,
  );
}

Map<String, dynamic> _$MovieToJson(Movie instance) => <String, dynamic>{
      'id': instance.id,
      'original_name': instance.originalTitle,
      'title': instance.title,
    };
