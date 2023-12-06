import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MovieService} from "../../service/movie-service";
import {Movie} from "../../model/movie";

@Component({
  selector: 'app-full-banner',
  templateUrl: './full-banner.component.html',
  styleUrls: ['./full-banner.component.scss']
})
export class FullBannerComponent implements OnInit {

  movie: any;
  safeSrc: SafeResourceUrl;
  thumbnail: any;
  public buttonAddDeleteLabel: string;

  private storage: Storage;

  constructor(private router: Router, private sanitizer: DomSanitizer, private service: MovieService) {
    this.storage = window.localStorage;
    this.movie = this.router.getCurrentNavigation()?.extras.state;
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer);

    if(this.movie.isMyList) {
      this.buttonAddDeleteLabel = 'Add my list';
    } else {
      this.buttonAddDeleteLabel = 'Delete of my list';
    }
  }

  ngOnInit() {

  }

  addDeleteMyList( ) {
    if(this.movie.isMyList) {
      this.service.addMovie(this.movie);
      this.router.navigateByUrl('/');
    } else {
      let list: Movie[] = this.get('movies')
      for(let i=0; i < list.length; i++ ) {
        if( list[i].id === this.movie.id ) {
          list.splice(i, 1);
          this.storage.clear();
          this.set('movies', list);
          this.router.navigateByUrl('/');
        }
      }
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

  set(key: string, list: Movie[] ) {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(list));
    }
  }
}
