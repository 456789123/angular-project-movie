import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {Movie} from "../../model/movie";
import {Router} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['/title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() movie: Movie;

  safeSrc: SafeResourceUrl;
  thumbnail: any;
  videoPictire: boolean = false;

  constructor(private router: Router, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailerUrl);
    console.log(this.movie);
  }

  playVideo() {
    this.videoPictire = true;
  }
  stopVideo() {
    this.videoPictire = false;
  }

  passer() {
    this.router.navigateByUrl('/banner', { state: this.movie });
  }
}
