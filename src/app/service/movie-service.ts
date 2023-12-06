import {EventEmitter, Injectable} from "@angular/core";
import {Movie} from "../model/movie";

@Injectable()
export class MovieService {

  emitterMoviesList = new EventEmitter<Movie>();


  constructor() {
  }

  addMovie( movie: Movie) {
    this.emitterMoviesList.emit(movie);
  }

}
