import {Component, OnInit} from '@angular/core';
import {Movie} from "../../model/movie";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listMovies: Movie[];

  constructor( ) { }

  ngOnInit() {

    const movieOne: Movie = {
      id: 1,
      trailerUrl: 'https://www.youtube.com/embed/tmeOjFno6Do?autoplay=1&mute=1',
      coverUrl: 'assets/images/avengers.png',
      coverAlt: 'Avengers: Age of Ultron',
      name: 'Avengers: Age of Ultron',
      relevance: 98,
      age: 0,
      parts: 2,
      categories: ['Action', 'Adventure'],
      resume: 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things ' +
        'go horribly wrong and it\'s up to Earth\'s mightiest heroes to stop the villainous Ultron from enacting his terrible plan.',
      year: 2015,
      trailer: 'https://www.youtube.com/embed/tmeOjFno6Do?autoplay=0&mute=0',
      isMyList: true
    };

    const movieTwo: Movie = {
      id: 2,
      trailerUrl: 'https://www.youtube.com/embed/d96cjJhvlMA?autoplay=1&mute=1',
      coverUrl: 'assets/images/guardians_galaxy.png',
      coverAlt: 'Guardians of the Galaxy',
      name: 'Guardians of the Galaxy',
      relevance: 80,
      age: 12,
      parts: 2,
      categories: ['Adventure', 'Comedy'],
      resume: 'Why has Earth suddenly become the most important planet in the galaxy? The Guardians of the Galaxy plan ' +
        'to find out! Star-Lord, Gamora, Drax, Rocket Raccoon, Groot - and the invincible Iron Man - embark on an explosive adventure! ',
      year: 2014,
      trailer: 'https://www.youtube.com/embed/d96cjJhvlMA?si=1KlpvA_HaFINf5Xm',
      isMyList: true
    };

    const movieTree: Movie = {
      id: 3,
      trailerUrl: 'https://www.youtube.com/embed/xi-1NchUqMA?autoplay=1&mute=1',
      coverUrl: 'assets/images/knives_out.png',
      coverAlt: 'Knives Out',
      name: 'Knives Out',
      relevance: 80,
      age: 14,
      parts: 2,
      categories: ['Comedy', 'Crime'],
      resume: 'The circumstances surrounding the death of crime novelist Harlan Thrombey are mysterious, but there’s one ' +
        'thing that renowned Detective Benoit Blanc knows for sure everyone in the wildly dysfunctional Thrombey family is a suspect.',
      year: 2019,
      trailer: 'https://www.youtube.com/embed/xi-1NchUqMA?si=OE2ENbu4flwVL8et',
      isMyList: true
    };

    const movieFour: Movie = {
      id: 4,
      trailerUrl: 'https://www.youtube.com/embed/shW9i6k8cB0?autoplay=1&mute=1',
      coverUrl: 'assets/images/spider_man.png',
      coverAlt: 'Spider-Man: Into the Spider-Verse',
      name: 'Spider-Man: Into the Spider-Verse',
      relevance: 80,
      age: 0,
      parts: 2,
      categories: ['Animation', 'Adventure'],
      resume: 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals' +
        'from other dimensions to stop a threat for all realities.',
      year: 2023,
      trailer: 'https://www.youtube.com/embed/shW9i6k8cB0?si=_QzKp30sFLCmiUkr',
      isMyList: true
    };

    const movieFive: Movie = {
      id: 5,
      trailerUrl: 'https://www.youtube.com/embed/uXm6T1rAe28?autoplay=1&mute=1',
      coverUrl: 'assets/images/tenet.png',
      coverAlt: 'Tenet',
      name: 'Tenet',
      relevance: 55,
      age: 18,
      parts: 2,
      categories: ['Sci-Fi', 'Action'],
      resume: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys' +
        'through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
      year: 2020,
      trailer: 'https://www.youtube.com/embed/uXm6T1rAe28?si=IDSe9sdboI02NojF',
      isMyList: true
    }

    this.listMovies = [];

    this.listMovies.push(movieOne);
    this.listMovies.push(movieTwo);
    this.listMovies.push(movieTree);
    this.listMovies.push(movieFour);
    this.listMovies.push(movieFive);

  }


}
