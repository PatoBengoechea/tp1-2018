import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiThemoviedbService } from '../api-themoviedb.service';

@Component({
  selector: 'app-buscarpeliculas',
  templateUrl: './buscarpeliculas.component.html',
  styleUrls: ['./buscarpeliculas.component.css']
})
export class BuscarpeliculasComponent implements OnInit {

  private films: any = {};
  private filmDetails;
  private imgurlbase = "https://image.tmdb.org/t/p/w185";
  @Output() lookDetails = new EventEmitter<any>();

  constructor(private service: ApiThemoviedbService) { }

  ngOnInit() {
  }

  searchFilm(filmToSearch: string): void{
    this.service.searchFilm(filmToSearch).subscribe((data: any) => this.films = data.results);
    console.log(this.service);
  }

  searchFilmDetails(event, id: number): void{
    this.lookDetails.emit(id);
    //this.service.searchFilmDetails(id).subscribe((data: any) => this.filmDetails = data.results);
  }
}
