import { Component, OnInit } from '@angular/core';
import { ApiThemoviedbService } from '../api-themoviedb.service';
import { Subscriber } from 'rxjs/Subscriber';


@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.css']
})
export class NowPlayingMoviesComponent implements OnInit {

  private nowPlayingMovies: any = {};
  private dateToday: any;
  private imgBaseURL = "https://image.tmdb.org/t/p/";
  private imgPosterSize = "w780";
 

  constructor(private service: ApiThemoviedbService) { }

  ngOnInit() {
    this.searchNowPlayingMovies();
    this.dateToday = Date.now().toString();
   }

  searchNowPlayingMovies(): void {
    // Busco peliculas populares
    this.service.searchNowPlayingMovies()
      .subscribe((data: any) => this.nowPlayingMovies = data.results); 
      console.log(this.service);
      console.log(this.nowPlayingMovies);
    }

}
