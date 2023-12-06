import {Component, OnInit} from "@angular/core";
import {Movie} from "./model/movie";
import {MovieService} from "./service/movie-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {


  private storage: Storage;

  private myListMovies: Movie[] = [];

  menuOpened: boolean = false;

  constructor(private service: MovieService, ) {
    this.storage = window.localStorage;
  }

  ngOnInit() {

    this.service.emitterMoviesList.subscribe( movie => {

      let insert = true;

      if(this.myListMovies === null) { this.myListMovies = [];}

      if( this.myListMovies !== null && this.myListMovies.length > 0 ) {
        this.myListMovies.forEach( mov => {
          if(mov.id === movie.id) {
            insert = false;
          }
        });
      }

      if( insert ) {
        this.myListMovies.push(movie);
        this.remove('movies');
        this.set('movies', this.myListMovies);
      }

    });

    this.myListMovies = this.get('movies');
  }


  setMenuStage(state: boolean) {
    this.menuOpened = state;
  }

  set(key: string, list: any ) {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(list));
    }
  }


  get(key: string): any {
    if (this.storage) {
      const storedValue = this.storage.getItem(key);

      if (storedValue !== null) {
        return JSON.parse(storedValue);
      }
    }
    return null;
  }


  remove(key: string) {
    if (this.storage) {
      this.storage.removeItem(key);
    }
  }


}
