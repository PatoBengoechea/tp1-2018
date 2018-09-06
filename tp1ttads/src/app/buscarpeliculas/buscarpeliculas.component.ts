import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiThemoviedbService } from '../api-themoviedb.service';

@Component({
  selector: 'app-buscarpeliculas',
  templateUrl: './buscarpeliculas.component.html',
  styleUrls: ['./buscarpeliculas.component.css']
})
export class BuscarpeliculasComponent implements OnInit {

  private films: any = [];
  private filmDetails;
  private imgurlbase = "https://image.tmdb.org/t/p/w185";
  @Output() lookDetails = new EventEmitter<any>();

  constructor(private service: ApiThemoviedbService) { }

  ngOnInit() {
  }

  searchFilm(nameToSearch: string): void{
    this.service.searchFilms(nameToSearch).subscribe((data: any) => this.films = data.results);
    //this.service.searchFilms(nameToSearch).subscribe((data: any) => console.log(data.results));
  }

  searchFilmDetails(event, id: number): void{
    this.lookDetails.emit(id);
    //this.service.searchFilmDetails(id).subscribe((data: any) => this.filmDetails = data.results);
  }
}
