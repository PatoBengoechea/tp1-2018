import { Component, OnInit } from '@angular/core';
import { ApiThemoviedbService } from '../api-themoviedb.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class popularMoviesComponent implements OnInit {

  private popularMovies: any = [];
  private imgBaseUrl = "https://image.tmdb.org/t/p/";
  private imgPosterSize = "w780";
 

  constructor(private service: ApiThemoviedbService) { }

  ngOnInit() {
    this.searchpopularMovies();
   }

  searchpopularMovies(): void {
    this.service.searchPopularMovies().subscribe((response:any)=> this.popularMovies = response.results);
    this.service.searchPopularMovies().subscribe((response:any)=> console.log(response.results));

  }

}