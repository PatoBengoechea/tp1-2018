import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.css']
})
export class NowPlayingMoviesComponent implements OnInit {

  nowPlayingMovies: any = {};
  config: any;
  imgBaseUrl;
  imgPosterSize;
  apiKey: 'afbc1995a41f72f35622f748d82068dc';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.searchNowPlayingMovies();
   }

  searchNowPlayingMovies() {
    // Busco peliculas populares
    this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=afbc1995a41f72f35622f748d82068dc&language=en-US&page=1').subscribe(
      (response:any)=> this.nowPlayingMovies = response.results
    ); 
    // Get configuration para tener los datos de las imagenes
    this.http.get('https://api.themoviedb.org/3/configuration?api_key=afbc1995a41f72f35622f748d82068dc').subscribe(
      (response:any)=>this.config = response.results
    );
    this.imgBaseUrl="http://image.tmdb.org/t/p/";
    this.imgPosterSize="w780";

  }

}
