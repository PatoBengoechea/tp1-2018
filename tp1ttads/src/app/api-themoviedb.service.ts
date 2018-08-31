import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiThemoviedbService {

  private dominioURL = "https://api.themoviedb.org/3";
  private apiKey = "api_key=afbc1995a41f72f35622f748d82068dc";
  private language = "&language=en-US";
  private searchURL: string;

  constructor(private http: HttpClient) { }

  searchFilm(film: string) {
    // STRING: https://api.themoviedb.org/3/search/movie?api_key=afbc1995a41f72f35622f748d82068dc&language=en-US&query='+filmToSearch+'&page=1&include_adult=false
    this.searchURL = this.dominioURL + "/search/movie?" + this.apiKey + this.language + "&query=" + film + "&page=1&include_adult=false";
    return this.http.get(this.searchURL);
  }

  searchFilmDetails(id: number) {
    // STRING: https://api.themoviedb.org/3/movie/' + id + '?api_key=afbc1995a41f72f35622f748d82068dc&language=en-US
    this.searchURL = this.dominioURL + id + "?" + this.apiKey + this.language;
    return this.http.get(this.searchURL);
  }
  
  searchNowPlayingMovies() {
    this.searchURL = this.dominioURL + "movie/now_playing?" + this.apiKey + "&language=en-US&page=1";
    return this.http.get(this.searchURL);
  }

  searchPopularMovies() {
    // STRING: https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=afbc1995a41f72f35622f748d82068dc
    this.searchURL = this.dominioURL + "/movie/popular?page=1" + this.language + this.apiKey;
    return this.http.get(this.searchURL);
  }


}
