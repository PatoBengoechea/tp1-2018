import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiThemoviedbService {

  private dominioURL = "https://api.themoviedb.org/3";
  private apiKey = "api_key=afbc1995a41f72f35622f748d82068dc";
  private language = "&language=en-US&";
  private autenticate = "https://www.themoviedb.org/authenticate/";
  private session = "https://www.themoviedb.org/authentication/session/new?";
  private searchURL: string;

  constructor(private http: HttpClient) { }

  //Buscar películas por nombre
  searchFilms(film: string) {
    this.searchURL = this.dominioURL + "/search/movie?" + this.apiKey + this.language + "&query=" + film + "&page=1&include_adult=false";
    return this.http.get(this.searchURL);
  }
  //Buscar detalles de una película 
  searchFilmDetails(id: number) {
    this.searchURL = this.dominioURL + id + "?" + this.apiKey + this.language;
    return this.http.get(this.searchURL);
  }
  //Buscar películas en cartelera
  searchNowPlayingMovies() {
    this.searchURL = this.dominioURL + "/movie/now_playing?" + this.apiKey + this.language + "&page=1";
    return this.http.get(this.searchURL);
  }
  //Buscar películas populares
  searchPopularMovies() {
    this.searchURL = this.dominioURL + "/movie/popular?page=1" + this.language + this.apiKey;
    return this.http.get(this.searchURL);
  }
  //Votar una película
  rateAMovie(id: number, vote: number){
    let response_token;
    let response_session;
    let body_rate: any = {};
    let body_session: any = {};
    //Create a new request token
    response_token = this.http.get(this.dominioURL + "authentication/token/new?" + this.apiKey);
    //Autorizhe the request token
    this.http.get(this.autenticate + response_token.token_request + "/allow");
    //create a new session id
    body_session.request_token = response_token;
    response_session = this.http.post(this.session + this.apiKey, body_session);
    //Rate the movie
    body_rate.value = vote;
    this.searchURL = (this.dominioURL + "/movie/" + id + "/rating?" + this.apiKey);
    this.http.post(this.searchURL, body_rate);
  }

}
