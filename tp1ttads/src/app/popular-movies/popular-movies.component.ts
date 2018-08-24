import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class popularMoviesComponent implements OnInit {

  popularMovies: any = {};
  config: any;
  imgBaseUrl;
  imgPosterSize;
  apiKey: 'afbc1995a41f72f35622f748d82068dc';
 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.searchpopularMovies();
   }

  searchpopularMovies() {
    // Busco peliculas populares
    this.http.get('https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=afbc1995a41f72f35622f748d82068dc').subscribe(
      (response:any)=> this.popularMovies = response.results
    ); 
    // Get configuration para tener los datos de las imagenes
    this.http.get('https://api.themoviedb.org/3/configuration?api_key=afbc1995a41f72f35622f748d82068dc').subscribe(
      (response:any)=>this.config = response.results
    );
    this.imgBaseUrl="http://image.tmdb.org/t/p/";
    this.imgPosterSize="w780";

  }

}