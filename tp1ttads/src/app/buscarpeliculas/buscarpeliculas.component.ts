import { Component, OnInit } from '@angular/core';
import { ApiThemoviedbService } from '../api-themoviedb.service';

@Component({
  selector: 'app-buscarpeliculas',
  templateUrl: './buscarpeliculas.component.html',
  styleUrls: ['./buscarpeliculas.component.css']
})
export class BuscarpeliculasComponent implements OnInit {

  private film: any;
  private films: any = {};
  private filmDetails;
  private imgBaseURL = "http://image.tmdb.org/t/p/";

  constructor(private service: ApiThemoviedbService) { }

  ngOnInit() {
  }

  searchFilm(filmToSearch: string): void{
    this.service.searchFilm(filmToSearch).subscribe((data: any) => this.films = data.results);
    this.film = "";
  }

  searchFilmDetails(id: number): void{
    this.service.searchFilmDetails(id).subscribe((data: any) => this.filmDetails = data.results);
  }
}
