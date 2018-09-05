import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchFilmComponent implements OnInit {

  //@Input() idPel;

  film: any={};
  comment;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
  searchFilm(idPel){
    
      
  }

  rateMovie(input){
    let vote: number;
    vote=input;

  }
  

}
