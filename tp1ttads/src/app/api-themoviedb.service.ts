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
    //let response_token;
    //let response_session;
    //let body_session: any = {};
    let guest_session_id;
    let body_rate: any = {};

    // Solicitar guest_session_id --> Se eliminará al cabo de 24hs sin uso
    // https://api.themoviedb.org/3/authentication/guest_session/new?api_key=afbc1995a41f72f35622f748d82068dc
    this.searchURL = this.dominioURL + "/authentication/guest_session/new?" + this.apiKey;
    this.http.get(this.searchURL).subscribe(data => guest_session_id = data);

    //Rate the movie (con guest_sesion_id)
    //https://api.themoviedb.org/3/movie/11/rating?api_key=afbc1995a41f72f35622f748d82068dc&guest_session_id=<<guest_session_id>>
    body_rate.value = vote;
    this.searchURL = this.dominioURL + "/movie/" + id + "/rating?" + this.apiKey + "&guest_session_id=" + guest_session_id;
    this.http.post(this.searchURL, body_rate);

    /*
    //Create a new request token
    https://api.themoviedb.org/3/authentication/token/new?api_key=afbc1995a41f72f35622f748d82068dc
    response_token = this.http.get(this.dominioURL + "authentication/token/new?" + this.apiKey);
    
    //Autorizhe the request token
    this.http.get(this.autenticate + response_token.token_request + "/allow");
    //create a new session id
    body_session.request_token = response_token;
    response_session = this.http.post(this.session + this.apiKey, body_session);
    */
  
  }

}
