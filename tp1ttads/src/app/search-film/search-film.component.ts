import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchFilmComponent implements OnInit {

  @Input() idPel;

  film: any={};
  comment;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
  searchFilm(idPel){
    this.http.get('https://api.themoviedb.org/3/movie/11?api_key=afbc1995a41f72f35622f748d82068dc&language=en-US').subscribe(
        (response:any) => this.film = response.results
      );
      
  }

  rateMovie(input){
    let vote: number;
    vote=input;

  }
  

}
