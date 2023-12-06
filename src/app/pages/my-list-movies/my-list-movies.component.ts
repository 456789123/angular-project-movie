import {Component, OnInit} from '@angular/core';
import {Movie} from "../../model/movie";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-my-list-movies',
  templateUrl: './my-list-movies.component.html',
  styleUrls: ['./my-list-movies.component.css']
})
export class MyListMoviesComponent implements OnInit {

  public listMovies: Movie[] = [];
  public storage: Storage;

  constructor(private route: ActivatedRoute) {
    this.storage = window.localStorage;
  }

  ngOnInit(): void {
    this.listMovies = this.get('movies');
    if( this.listMovies && this.listMovies.length > 0 ) {
      this.listMovies.forEach( movie => {
        movie.isMyList = false;
      });
    }
  }

  get(key: string): any {
    if (this.storage) {
      const storedValue = this.storage.getItem(key);

      if (storedValue != null) {
        return JSON.parse(storedValue);
      }
    }
    return null;
  }

}
