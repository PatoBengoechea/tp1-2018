import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Key } from '../../../node_modules/protractor';

@Component({
  selector: 'app-buscarpeliculas',
  templateUrl: './buscarpeliculas.component.html',
  styleUrls: ['./buscarpeliculas.component.css']
})
export class BuscarpeliculasComponent implements OnInit {

  filmToSearch;
  config: any;
  films: any = {};
  imgurlbase;
  film: any = {};
  //idToSearch: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  searchFilm(filmToSearch){
    const key="afbc1995a41f72f35622f748d82068dc";
    this.http.get('https://api.themoviedb.org/3/search/movie?api_key=afbc1995a41f72f35622f748d82068dc&language=en-US&query='+
    filmToSearch+'&page=1&include_adult=false').subscribe((response:any)=>
    this.films = response.results);
    this.http.get('https://api.themoviedb.org/3/configuration?api_key=afbc1995a41f72f35622f748d82068dc').subscribe(
      (response:any) => this.config = response.results
    );
    this.imgurlbase = "http://image.tmdb.org/t/p/w300";
    console.log(this.films);
    this.filmToSearch = "";
  }

  /*
  showMovieDetails(id: number){
    this.idToSearch = id;
  } 
  */
 
  buscarDetalles(id: any){
    this.http.get('https://api.themoviedb.org/3/movie/11?api_key=afbc1995a41f72f35622f748d82068dc&language=en-US').subscribe(
      (response:any) => {
        this.film = response.results;
        console.log(this.film)
      });
    /*
    this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=afbc1995a41f72f35622f748d82068dc&language=en-US').subscribe(
      (response:any) => this.film = response.results
    );
    */
    console.log(this.film);
    //Da film = undefind
  }
}
