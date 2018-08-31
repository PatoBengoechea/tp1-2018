import { Component, OnInit } from '@angular/core';
import { ApiThemoviedbService } from '../api-themoviedb.service';

@Component({
  selector: 'app-buscarpeliculas',
  templateUrl: './buscarpeliculas.component.html',
  styleUrls: ['./buscarpeliculas.component.css']
})
export class BuscarpeliculasComponent implements OnInit {

  private films: any = {};
  private filmDetails;
<<<<<<< HEAD
  private imgBaseURL = "http://image.tmdb.org/t/p/";
=======
  private imgurlbase = "https://image.tmdb.org/t/p/w185";
>>>>>>> e1325e8254a2eff14727d9dfa78ecdd930065dc7

  constructor(private service: ApiThemoviedbService) { }

  ngOnInit() {
  }

  searchFilm(filmToSearch: string): void{
    this.service.searchFilm(filmToSearch).subscribe((data: any) => this.films = data.results);
    console.log(this.service);
  }

  searchFilmDetails(id: number): void{
    this.service.searchFilmDetails(id).subscribe((data: any) => this.filmDetails = data.results);
  }
}
