import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  API_URL = `//swapi.co/api/`;

  constructor (private http: HttpClient) {}
  
  fetchMovies = () => this.http.get(`${this.API_URL}films`);

  fetchCharacterByUrl = (url: string) => this.http.get(url);
}