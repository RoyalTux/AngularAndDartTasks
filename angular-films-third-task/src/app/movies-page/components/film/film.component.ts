import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IFilm} from '../../../services/api.interface'

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input()
  data: IFilm;

  @Output()
  openFilm = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  handleOpenFilm(){
    this.openFilm.emit(this.data.episode_id);
  }

}