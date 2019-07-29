import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse, IFilm} from './api.interface';
import {map, tap} from 'rxjs/operators'

@Injectable()
export class ApiService {

  API_URL: string = "https://swapi.co/api/";

  constructor(private http: HttpClient) { }

  getFilms(): Observable<IFilm[]>{
    const url = this.API_URL + 'films';
    return this.http.get<ApiResponse>(url).pipe(
      map((response) => response.results)
    );
  }
}