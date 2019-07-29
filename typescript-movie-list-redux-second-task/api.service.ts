const API_KEY = 'c9b14b6a87dd35d703106b70a47ae123';

function fetchApi(url: string): Promise<any> {
  return fetch(url).then((response: Response) => {
    if (!response.ok) {
      return Promise.reject(new Error(response.status.toString()));
    }
    return response.json();
  });
}

export function searchMovie(query: string): Promise<any> {
  let url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=ru&query=${query}`;
  return fetchApi(url);
}

export function getTopMovies(): Promise<IResponse> {
  let url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=ru`;
  return fetchApi(url);
}

export function getMovieInfo(movieId): Promise<IMovie> {
  return fetchApi(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ru`);
}

export function getPosterPath(path: string): string {
  return `https://image.tmdb.org/t/p/w200/${path}`;
}

export interface IResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IMovie {
  adult?: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  popularity: number;
  original_name?: string;
  name?: string;
  first_air_date?: string;
  origin_country?: string[];
}