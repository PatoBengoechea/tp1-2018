import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie;
  private imgBaseURL = "https://image.tmdb.org/t/p/";
  private imgPosterSize = "w780";

  constructor() { }

  ngOnInit() {
  }

}
