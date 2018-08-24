import { Component, OnInit, Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-modal-detalles',
  templateUrl: './modal-detalles.component.html',
  styleUrls: ['./modal-detalles.component.css']
})
export class ModalDetallesComponent implements OnInit {

  film: any;
  //@Input() movie_id: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.buscarDetalles();
   }

  buscarDetalles(){
    this.http.get('https://api.themoviedb.org/3/movie/11?api_key=afbc1995a41f72f35622f748d82068dc&language=en-US').subscribe(
      (response:any) => this.film = response.results
    );
    console.log(this.film);

  }

}
