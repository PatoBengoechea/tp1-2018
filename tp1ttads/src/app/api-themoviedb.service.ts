import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiThemoviedbService {

  private dominioURL = "https://api.themoviedb.org/3";
  private apiKey = "api_key=afbc1995a41f72f35622f748d82068dc";
  private language = "&language=en-US&";
  private searchURL: string;

  constructor(private http: HttpClient) { }

  searchFilm(film: string) {
    this.searchURL = this.dominioURL + "/search/movie?" + this.apiKey + this.language + "&query=" + film + "&page=1&include_adult=false";
    return this.http.get(this.searchURL);
  }

  searchFilmDetails(id: number) {
    this.searchURL = this.dominioURL + id + "?" + this.apiKey + this.language;
    return this.http.get(this.searchURL);
  }
  
  searchNowPlayingMovies() {
    this.searchURL = this.dominioURL + "/movie/now_playing?" + this.apiKey + this.language + "&page=1";
    return this.http.get(this.searchURL);
  }

  searchPopularMovies() {
    this.searchURL = this.dominioURL + "/movie/popular?page=1" + this.language + this.apiKey;
    return this.http.get(this.searchURL);
  }

  rateAMovie(id: number, vote: number){
    let data:any ={};
    data.value=vote;
    data = data.JSON.stringify();
    this.searchURL = this.dominioURL + 
    this.http.post
  }


}
